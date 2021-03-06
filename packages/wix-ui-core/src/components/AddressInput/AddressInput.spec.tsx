import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {addressInputDriverFactory} from './AddressInput.driver';
import {AddressInput, Handler} from './AddressInput';
import {GoogleMapsClientStub} from './GoogleMapsClientStub';
import * as waitForCond from 'wait-for-cond';
import * as eventually from 'wix-eventually';
import * as helper from './AddressInputTestHelper';
import {OptionFactory} from '../../baseComponents/DropdownOption/OptionFactory';
import {sleep} from 'wix-ui-test-utils/react-helpers';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {mount} from 'enzyme';
import {addressInputTestkitFactory} from '../../testkit';
import {addressInputTestkitFactory as enzymeAddressInputTestkitFactory} from '../../testkit/enzyme';

describe('AddressInput', () => {
    const createDriver = createDriverFactory(addressInputDriverFactory);
    let driver, onSelectSpy;

    const init = ({handler, ...rest}: any = {}) => {
        GoogleMapsClientStub.reset();
        (GoogleMapsClientStub.prototype.autocomplete as any).mockClear();
        (GoogleMapsClientStub.prototype.geocode as any).mockClear();
        (GoogleMapsClientStub.prototype.placeDetails as any).mockClear();
        onSelectSpy = jest.fn();
        driver = createDriver(<AddressInput
            apiKey={helper.API_KEY}
            lang="en"
            Client={GoogleMapsClientStub}
            onSelect={onSelectSpy}
            handler={handler || Handler.geocode}
            {...rest}
        />);
    };

    beforeAll(() => {
        jest.spyOn(GoogleMapsClientStub.prototype, 'autocomplete');
        jest.spyOn(GoogleMapsClientStub.prototype, 'geocode');
        jest.spyOn(GoogleMapsClientStub.prototype, 'placeDetails');
    });

    beforeEach(() => {
        init();
    });

    it('Should instantiate client', () => {
        const Client = jest.fn() as any;
        createDriver(<AddressInput apiKey="api-key" lang="en" Client={Client} onSelect={() => null} />);
        expect(Client.mock.instances.length).toBe(1);
    });

    it('Should call MapsClient.autocomplete upon typing', () => {
        driver.setValue('n');
        expect(GoogleMapsClientStub.prototype.autocomplete).toHaveBeenCalledWith(helper.API_KEY, 'en', {input: 'n'});
    });

    it('Should throttle calls to MapsClient.autocomplete', async () => {
        driver.setValue('n');
        driver.setValue('ne');
        driver.setValue('new');
        await eventually(() => {
            expect(GoogleMapsClientStub.prototype.autocomplete).toHaveBeenCalledWith(helper.API_KEY, 'en', {input: 'n'});
            expect(GoogleMapsClientStub.prototype.autocomplete).toHaveBeenCalledWith(helper.API_KEY, 'en', {input: 'new'});
        });
        expect(GoogleMapsClientStub.prototype.autocomplete).toHaveBeenCalledTimes(2);
    });

    it('Should call MapsClient.autocomplete upon typing, with types', () => {
        const types = ['hello', 'world'];
        init({types});
        driver.setValue('n');
        expect(GoogleMapsClientStub.prototype.autocomplete)
            .toHaveBeenCalledWith(helper.API_KEY, 'en', {input: 'n', types});
    });

    it('Should not display results until user typed', () => {
        driver.click();
        expect(driver.isContentElementExists()).toBeFalsy();
    });

    it('Should display results', async () => {
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
        driver.click();
        driver.setValue('n');
        await waitForCond(() => driver.isContentElementExists());
        expect(helper.getOptionsText(driver)).toEqual([helper.ADDRESS_DESC_1, helper.ADDRESS_DESC_2]);
    });

    it('Should empty suggestion immediately list if string is empty', async () => {
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
        driver.click();
        driver.setValue('n');
        await waitForCond(() => driver.isContentElementExists());
        driver.setValue('');
        expect(GoogleMapsClientStub.prototype.autocomplete).toHaveBeenCalledTimes(1);
        expect(driver.isContentElementExists()).toBeFalsy();
    });

    it('Should display results filtered results', async () => {
        init({filterTypes: ['airport']});
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
        driver.click();
        driver.setValue('n');
        await waitForCond(() => driver.isContentElementExists());
        expect(helper.getOptionsText(driver)).toEqual([helper.ADDRESS_DESC_2]);
    });

    it('Should return all addresses in case filterTypes is an empty array', async () => {
        init({filterTypes: []});
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
        driver.click();
        driver.setValue('n');
        await waitForCond(() => driver.isContentElementExists());
        expect(helper.getOptionsText(driver)).toEqual([helper.ADDRESS_DESC_1, helper.ADDRESS_DESC_2]);
    });

    it('Should issue a geocode request once an option is chosen', async () => {
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
        GoogleMapsClientStub.setGeocode(helper.GEOCODE_2);

        driver.click();
        driver.setValue('n');

        await waitForCond(() => driver.isContentElementExists());

        driver.optionAt(1).click();
        expect(GoogleMapsClientStub.prototype.geocode).toHaveBeenCalledWith(helper.API_KEY, 'en', {placeId: helper.ADDRESS_2.place_id});
        return eventually(() => expect(onSelectSpy).toHaveBeenCalledWith({
            originValue: helper.ADDRESS_DESC_2,
            googleResult: helper.GEOCODE_2,
            address: helper.INTERNAL_ADDRESS_GEOCODE_2
        }), {timeout: 1000});
    });

    it('Should append region to geocode request if countryCode prop is set', async () => {
        init({countryCode: 'IL'});
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
        GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);

        driver.click();
        driver.setValue('n');

        expect(GoogleMapsClientStub.prototype.autocomplete)
            .toHaveBeenCalledWith(helper.API_KEY, 'en', {input: 'n', componentRestrictions: {country: 'il'}});

        await waitForCond(() => driver.isContentElementExists());

        driver.optionAt(0).click();
        expect(GoogleMapsClientStub.prototype.geocode).toHaveBeenCalledWith(helper.API_KEY, 'en', {
            placeId: helper.ADDRESS_1.place_id,
            region: 'IL'
        });
    });

    it('Should not append region to placeDetails request even if countryCode prop is set', async () => {
        init({handler: Handler.places, countryCode: 'IL'});
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
        GoogleMapsClientStub.setPlaceDetails(helper.PLACE_DETAILS_1);

        driver.click();
        driver.setValue('n');

        await waitForCond(() => driver.isContentElementExists());

        driver.optionAt(0).click();
        expect(GoogleMapsClientStub.prototype.placeDetails).toHaveBeenCalledWith(helper.API_KEY, 'en', {
            placeId: helper.ADDRESS_1.place_id
        });
    });

    it('Should issue a placeDetails request once an option is chosen', async () => {
        init({handler: Handler.places});
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
        GoogleMapsClientStub.setPlaceDetails(helper.PLACE_DETAILS_2);

        driver.click();
        driver.setValue('n');

        await waitForCond(() => driver.isContentElementExists());

        driver.optionAt(1).click();
        expect(GoogleMapsClientStub.prototype.placeDetails).toHaveBeenCalledWith(helper.API_KEY, 'en', {placeId: helper.ADDRESS_2.place_id});
        return eventually(() => expect(onSelectSpy).toHaveBeenCalledWith({
            originValue: helper.ADDRESS_DESC_2,
            googleResult: helper.PLACE_DETAILS_2,
            address: helper.INTERNAL_ADDRESS_PLACE_DETAILS_2
        }), {timeout: 1000});
    });

    it('Should try and street number', async () => {
        init();
        GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
        GoogleMapsClientStub.setGeocode(helper.PLACE_DETAILS_1);

        driver.click();
        driver.setValue('11 n');

        await waitForCond(() => driver.isContentElementExists());

        driver.optionAt(0).click();

        return eventually(() => {
            const firstCallArgument = onSelectSpy.mock.calls[0][0];
            const {address_components} = firstCallArgument.googleResult;
            expect(firstCallArgument.address.number).toBe('11');
            expect(address_components).toEqual([{
                long_name: '11',
                short_name: '11',
                types: [
                    'street_number'
                ]
            }]);
        }, {timeout: 1000});
    });

    describe('Fallback to manual', () => {
        it('Should call onSet (with handler) with raw input if there are no suggestions', () => {
            init({fallbackToManual: true});
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);
            driver.click();
            driver.setValue('n');
            driver.keyDown('Enter');

            return eventually(() => {
                expect(GoogleMapsClientStub.prototype.geocode).toHaveBeenCalledWith(helper.API_KEY, 'en', {address: 'n'});
                expect(onSelectSpy).toHaveBeenCalledWith(expect.objectContaining({
                    googleResult: helper.GEOCODE_1
                }));
            }, {timeout: 1000});
        });

        it('Should call onSet with null if there are no suggestions and user input is empty', () => {
            init({fallbackToManual: true});
            driver.click();
            driver.setValue('');
            driver.keyDown('Enter');

            return eventually(() => {
                expect(GoogleMapsClientStub.prototype.geocode).not.toHaveBeenCalledWith();
                expect(onSelectSpy).toHaveBeenCalledWith(null);
            });
        });

        it('Should not should fall back to geocode when places api is selected and using raw input', () => {
            init({fallbackToManual: true, handler: Handler.places});
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);
            driver.click();
            driver.setValue('n');
            driver.keyDown('Enter');
            return eventually(() => {
                expect(GoogleMapsClientStub.prototype.geocode).toHaveBeenCalledWith(helper.API_KEY, 'en', {address: 'n'});
                expect(onSelectSpy).toHaveBeenCalledWith(expect.objectContaining({
                    googleResult: helper.GEOCODE_1
                }));
            }, {timeout: 1000});
        });

        it('Should not call onSet in case there are suggestions', async () => {
            init({fallbackToManual: true});
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);
            driver.click();
            driver.setValue('n');
            await waitForCond(() => driver.isContentElementExists());
            driver.keyDown('Enter');
            expect(GoogleMapsClientStub.prototype.geocode).not.toHaveBeenCalled();
            expect(onSelectSpy).not.toHaveBeenCalled();
        });

        it('Should not call onSet in case there are pending suggestions', async () => {
            init({fallbackToManual: true});
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1], 100);
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);
            driver.click();
            driver.setValue('n');
            driver.keyDown('Enter');
            await sleep(200);
            expect(GoogleMapsClientStub.prototype.geocode).not.toHaveBeenCalled();
            expect(onSelectSpy).not.toHaveBeenCalled();
        });
    });

    describe.skip('Stale requests', () => {
        it('Should ignore stale requests - autocomplete', async () => {
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1], 100);
            driver.click();
            driver.setValue('n');

            GoogleMapsClientStub.setAddresses([helper.ADDRESS_2], 1);
            driver.setValue('ne');

            await sleep(250);
            expect(helper.getOptionsText(driver)).toEqual([helper.ADDRESS_DESC_2]);
        });

        it('Should ignore stale requests - geocode', async () => {
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_1, 1000);
            driver.click();
            driver.setValue('n');
            await helper.waitForSingleOption(helper.ADDRESS_DESC_1, driver);
            driver.optionAt(0).click();

            GoogleMapsClientStub.setAddresses([helper.ADDRESS_2]);
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_2, 1);
            driver.setValue('ne');
            await helper.waitForSingleOption(helper.ADDRESS_DESC_2, driver);
            driver.optionAt(0).click();

            await sleep(250);
            expect(onSelectSpy).toHaveBeenCalledWith({
                originValue: helper.ADDRESS_DESC_2,
                googleResult: helper.GEOCODE_2,
                address: helper.INTERNAL_ADDRESS_GEOCODE_2
            });
            expect(onSelectSpy).toHaveBeenCalledTimes(1);
        });

        it('Should ignore stale requests - placeDetails', async () => {
            init({handler: Handler.places});
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
            GoogleMapsClientStub.setPlaceDetails(helper.PLACE_DETAILS_1, 1000);
            driver.click();
            driver.setValue('n');
            await helper.waitForSingleOption(helper.ADDRESS_DESC_1, driver);
            driver.optionAt(0).click();

            GoogleMapsClientStub.setAddresses([helper.ADDRESS_2]);
            GoogleMapsClientStub.setPlaceDetails(helper.PLACE_DETAILS_2, 1);
            driver.setValue('ne');
            await helper.waitForSingleOption(helper.ADDRESS_DESC_2, driver);
            driver.optionAt(0).click();

            await sleep(250);
            expect(onSelectSpy).toHaveBeenCalledWith({
                originValue: helper.ADDRESS_DESC_2,
                googleResult: helper.PLACE_DETAILS_2,
                address: helper.INTERNAL_ADDRESS_PLACE_DETAILS_2
            });
            expect(onSelectSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('Integration with InputWithOptions', () => {
        it('Should pass value prop', () => {
            init({value: 'value'});
            expect(driver.getValue()).toBe('value');
        });

        it('Should pass placeholder prop', () => {
            init({placeholder: 'placeholder'});
            expect(driver.getPlaceholder()).toBe('placeholder');
        });

        it('Should pass readOnly prop', () => {
            init({readOnly: true});
            expect(driver.isDisabled()).toBeTruthy();
        });

        it('Should handle onChange event', () => {
            const onChange = jest.fn();
            init({onChange});
            driver.setValue('a');
            expect(onChange).toHaveBeenCalledWith(expect.objectContaining({target: {value: 'a'}}));
        });

        it('Should handle onKeyDown event', () => {
            const onKeyDown = jest.fn();
            init({onKeyDown});
            driver.keyDown('a');
            expect(onKeyDown).toHaveBeenCalledWith(expect.objectContaining({key: 'a'}));
        });

        it('Should handle onFocus event', () => {
            const onFocus = jest.fn();
            init({onFocus});
            driver.focus();
            expect(onFocus).toHaveBeenCalled();
        });

        it('Should handle onBlur event', () => {
            const onBlur = jest.fn();
            init({onBlur});
            driver.blur();
            expect(onBlur).toHaveBeenCalled();
        });

        it('Should clear suggestions on blur', async () => {
            init({clearSuggestionsOnBlur: true});
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
            GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);
            driver.click();
            driver.setValue('n');
            await waitForCond(() => driver.isContentElementExists());
            driver.optionAt(0).click();
            driver.blur();
            await waitForCond(() => !driver.isContentElementExists());
            driver.click();
            expect(driver.isContentElementExists()).toBeFalsy();
        });

        it('Should handle onManualInput', async () => {
            const onManualInput = jest.fn();
            init({onManualInput});
            driver.click();
            driver.setValue('n');
            driver.keyDown('Enter');
            expect(onManualInput).toHaveBeenCalled();
        });
    });

    describe('Preview states', () => {
        it('Should display content element', () => {
            init({forceContentElementVisibility: true});
            expect(driver.isContentElementExists()).toBeTruthy();
        });

        it('Should display content element', async () => {
            init({forceOptions: [OptionFactory.create({id: 0, value: 'a'})]});
            GoogleMapsClientStub.setAddresses([helper.ADDRESS_1]);
            driver.click();
            driver.setValue('n');
            await waitForCond(() => driver.isContentElementExists());
            expect(helper.getOptionsText(driver)).toEqual(['a']);
        });
    });

    describe('testkit', () => {
        it('should exist', () => {
            expect(isTestkitExists(<AddressInput
                lang="en"
                Client={GoogleMapsClientStub}
                apiKey=""
                onSelect={() => null}
            />, addressInputTestkitFactory)).toBe(true);
        });
    });

    describe('enzyme testkit', () => {
        it('should exist', () => {
            expect(isEnzymeTestkitExists(<AddressInput
                lang="en"
                Client={GoogleMapsClientStub}
                apiKey=""
                onSelect={() => null}
            />, enzymeAddressInputTestkitFactory, mount)).toBe(true);
        });
    });
});
