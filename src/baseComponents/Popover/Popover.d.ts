/// <reference types="react" />
import * as React from 'react';
import PopperJS from 'popper.js';
import { ElementProps } from '../../utils';
import { Requireable } from 'prop-types';
export declare type Placement = PopperJS.Placement;
export declare type AppendTo = PopperJS.Boundary | Element;
export declare const AppendToPropType: Requireable<any>;
export interface PopoverProps {
    /** The location to display the content */
    placement: Placement;
    /** Is the content shown or not */
    shown: boolean;
    /** onClick on the component */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** onMouseEnter on the component */
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    /** onMouseLeave on the component */
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    /** onKeyDown on the target component */
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    /** Show show arrow from the content */
    showArrow?: boolean;
    /** Moves poppover relative to the parent */
    moveBy?: {
        x: number;
        y: number;
    };
    /** Fade Delay */
    hideDelay?: number;
    /** Show Delay */
    showDelay?: number;
    /** Moves arrow by amount */
    moveArrowTo?: number;
    /** Enables calculations in relation to a dom element */
    appendTo?: AppendTo;
    /** Enables calculations in relation to the parent element*/
    appendToParent?: boolean;
    /** Animation timer */
    timeout?: number;
}
export declare type PopoverType = React.SFC<PopoverProps> & {
    Element?: React.SFC<ElementProps>;
    Content?: React.SFC<ElementProps>;
};
/**
 * Popover
 */
export declare const Popover: PopoverType;
