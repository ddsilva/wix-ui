import {inputDriverFactory} from '../../components/Input/Input.driver';
import {FIELD} from './';

export const timePickerDriverFactory = ({element, eventTrigger}) => {
  const inputDriver = inputDriverFactory({element, eventTrigger});

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** returns the input element */
    getInputElement: () => inputDriver.getInput(),
    /** returns a boolean indicating if the timePicker is disabled */
    isDisabled: () => inputDriver.isDisabled(),
    /** returns the input type attribute */
    getInputType: () => inputDriver.getInput().type,
    /** returns the value (corresponds to state.value) */
    getValue: () => inputDriver.getValue(),
    /** simulates a keyDown event on the input element */
    keyDown: key => inputDriver.keyDown(key),
    /** simulates a focus event on the input element */
    focus: () => inputDriver.focus(),
    /** simulates a blur event on the input element */
    blur: () => inputDriver.blur(),

    /** returns elements innerHtml */
    styles: {
      /** returns elements display css property */
      getRootDisplay: () => window.getComputedStyle(element).display,
      /** returns elements border-radius css property */
      getBorderRadius: () => window.getComputedStyle(element.querySelector('.outerLabel')).borderRadius
    }
  };
};
