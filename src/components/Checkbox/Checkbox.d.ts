/// <reference types="react" />
import * as React from 'react';
export interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    checked: boolean;
}
export interface OnClickEvent extends React.MouseEvent<HTMLDivElement> {
    checked: boolean;
}
export interface OnKeydownEvent extends React.KeyboardEvent<HTMLDivElement> {
    checked: boolean;
}
export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: React.EventHandler<OnChangeEvent | OnClickEvent | OnKeydownEvent>;
    id?: string;
    tabIndex?: number;
    checkedIcon?: JSX.Element;
    uncheckedIcon?: JSX.Element;
    indeterminateIcon?: JSX.Element;
    children?: React.ReactNode;
    error?: boolean;
    name?: string;
    readOnly?: boolean;
    required?: boolean;
    indeterminate?: boolean;
    autoFocus?: boolean;
    ['aria-controls']?: string[];
}
export interface CheckboxState {
    isFocused: boolean;
}
/**
 * Checkbox
 */
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static displayName: string;
    static propTypes: Object;
    static defaultProps: Partial<CheckboxProps>;
    private checkbox;
    state: {
        isFocused: boolean;
    };
    render(): JSX.Element;
    private handleKeydown;
    private handleClick;
    private handleChange;
    private handleInputClick;
    private handleInputBlur;
    private handleInputFocus;
}
