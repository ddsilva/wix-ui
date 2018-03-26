/// <reference types="react" />
import * as React from 'react';
export interface SliderProps {
    min?: number;
    max?: number;
    value?: number;
    onChange?: (x: any) => void;
    onBlur?: (x: any) => void;
    onFocus?: (x: any) => void;
    vertical?: boolean;
    step?: number;
    stepType?: 'value' | 'count';
    tooltipPosition?: 'default' | 'across';
    tooltipVisibility?: 'none' | 'always' | 'hover';
    tickMarksPosition?: 'none' | 'default' | 'middle' | 'across';
    tooltipPrefix?: string;
    tooltipSuffix?: string;
    trackSize?: number;
    thumbShape?: string;
    disabled?: boolean;
    dir?: string;
}
export interface SliderState {
    dragging: boolean;
    mouseDown: boolean;
    thumbHover: boolean;
    step: number;
}
export declare class Slider extends React.PureComponent<SliderProps, SliderState> {
    inner: HTMLDivElement;
    track: HTMLDivElement;
    ContinuousStep: number;
    static propTypes: Object;
    static defaultProps: {
        min: number;
        max: number;
        value: number;
        stepType: string;
        thumbShape: string;
        disabled: boolean;
        tooltipVisibility: string;
        tooltipPosition: string;
        tooltipPrefix: string;
        tooltipSuffix: string;
        tickMarksPosition: string;
        dir: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    getStartPos(): "right" | "left";
    calcStepValue(min: any, max: any, stepType: any, step: any): any;
    hasSomePropsChanged(prevProps: any, currProps: any, propsList: any): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getThumbSize(): number;
    setInnerNode: (inner: any) => void;
    setTrackNode: (track: any) => void;
    handleMouseDown: () => void;
    handleMouseUp: () => void;
    handleKeyDown: (ev: any) => void;
    handleMouseMove: (ev: any) => void;
    handleChange(value: any): void;
    handleThumbEnter: () => void;
    handleThumbLeave: () => void;
    clamp(val: any, min: any, max: any): number;
    isRtl(): boolean;
    moveThumbByMouse: (ev: any) => void;
    shouldShowTooltip(): boolean;
    calcThumbProgressPosition(): string;
    calcTrackFillPosition(): string;
    calcThumbCrossPosition(): string;
    calcThumbPosition(): {
        bottom: string;
        left: number;
        top?: undefined;
    } | {
        [x: string]: React.ReactText;
        top: number;
        bottom?: undefined;
        left?: undefined;
    };
    renderTooltip(): JSX.Element;
    render(): JSX.Element;
}
