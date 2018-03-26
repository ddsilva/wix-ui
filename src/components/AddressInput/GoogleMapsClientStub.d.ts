import { Address, Geocode, MapsClient, PlaceDetails } from '../../clients/GoogleMaps/types';
export declare function createAddress(description: string, types?: Array<string>): Address;
export declare function createGeocode(placeId: string, formattedAddress: string): Geocode;
export declare function createPlaceDetails(placeId: string, formattedAddress: string): PlaceDetails;
export declare class GoogleMapsClientStub implements MapsClient {
    static addresses: Array<Address>;
    static addressesDelay: number;
    static geocode: Array<Geocode>;
    static geocodeDelay: number;
    static placeDetails: PlaceDetails;
    static placeDetailsDelay: number;
    autocomplete(apiKey: string, lang: string, request: string): Promise<Address[]>;
    geocode(apiKey: string, lang: string, request: string): Promise<Geocode[]>;
    placeDetails(apiKey: string, lang: string, request: string): Promise<PlaceDetails>;
    static setAddresses(addresses: Array<Address>, addressesDelay?: number): void;
    static setGeocode(geocode: Geocode, geocodeDelay?: number): void;
    static setPlaceDetails(placeDetails: PlaceDetails, placeDetailsDelay?: number): void;
    static reset(): void;
}
