/// <reference types="react" />
import * as React from 'react';
export interface ButtonProps {
    type?: string;
    disabled?: boolean;
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    onMouseEnter?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    onMouseLeave?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    children?: React.ReactNode;
}
/**
 * Button
 */
export declare const Button: React.SFC<ButtonProps>;
