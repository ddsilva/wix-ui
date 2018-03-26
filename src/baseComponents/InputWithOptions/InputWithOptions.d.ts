/// <reference types="react" />
import * as React from 'react';
import { Placement } from '../../baseComponents/Popover';
import { Option } from '../../baseComponents/DropdownOption';
import { OPEN_TRIGGER_TYPE } from '../../baseComponents/Dropdown/constants';
import { Requireable } from 'prop-types';
import { InputProps } from '../../components/Input';
export interface InputWithOptionsProps {
    /** The location to display the content */
    placement?: Placement;
    /** The dropdown options array */
    options: Array<Option>;
    /** Trigger type to open the content */
    openTrigger?: OPEN_TRIGGER_TYPE;
    /** Handler for when an option is selected */
    onSelect?: (option: Option) => void;
    /** Handler for when an option is deselected */
    onDeselect?: (option: Option) => void;
    /** initial selected option ids */
    initialSelectedIds?: Array<string | number>;
    /** A callback for when initial selected options are set */
    onInitialSelectedOptionsSet?: (options: Array<Option>) => void;
    /** Should close content on select */
    closeOnSelect?: boolean;
    /** An element that always appears at the top of the options */
    fixedHeader?: React.ReactNode;
    /** An element that always appears at the bottom of the options */
    fixedFooter?: React.ReactNode;
    /** Animation timer */
    timeout?: number;
    /** Callback when the user pressed the Enter key or Tab key after he wrote in the Input field - meaning the user selected something not in the list  */
    onManualInput?: (value: string) => void;
    /** Should mark the text that matched the filter */
    highlightMatches?: boolean;
    /** Input prop types */
    inputProps: InputProps;
    /** If set to true, content element will always be visible, used for preview mode */
    forceContentElementVisibility?: boolean;
}
/**
 * InputWithOptions
 */
export declare class InputWithOptions extends React.PureComponent<InputWithOptionsProps> {
    static displayName: string;
    static defaultProps: {
        openTrigger: string;
        placement: string;
        closeOnSelect: boolean;
        initialSelectedIds: any[];
        highlightMatches: boolean;
        onSelect: () => any;
        onDeselect: () => any;
        onManualInput: () => any;
        onInitialSelectedOptionsSet: () => any;
    };
    static propTypes: {
        placement: Requireable<any>;
        options: (object: any, key: string, componentName: string, ...rest: any[]) => Error;
        openTrigger: Requireable<any>;
        onSelect: Requireable<any>;
        onDeselect: Requireable<any>;
        initialSelectedIds: Requireable<any>;
        onInitialSelectedOptionsSet: Requireable<any>;
        closeOnSelect: Requireable<any>;
        fixedHeader: Requireable<any>;
        fixedFooter: Requireable<any>;
        timeout: Requireable<any>;
        onManualInput: Requireable<any>;
        highlightMatches: Requireable<any>;
        inputProps: (object: any, key: string, componentName: string, ...rest: any[]) => Error;
        forceContentElementVisibility: Requireable<any>;
    };
    isEditing: boolean;
    constructor();
    _filterOptions(): Array<Option>;
    _onSelect(option: Option | null): void;
    _onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
    _onFocus(event: any): void;
    render(): JSX.Element;
}