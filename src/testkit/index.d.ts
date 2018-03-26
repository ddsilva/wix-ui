export declare const inputTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    hasStyleState: (stateName: any) => boolean;
    getInput: () => any;
    getValue: () => any;
    getPlaceholder: () => any;
    getPrefix: () => any;
    getSuffix: () => any;
    isDisabled: () => any;
    setValue: (value: any) => void;
    focus: () => any;
    blur: () => any;
    keyDown: (key: any) => any;
};
export declare const textTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isEllipsis: () => boolean;
    hasTitleAttribute: () => boolean;
    getFontFamily: () => string;
};
export declare const paginationTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    root: any;
    exists: () => boolean;
    simulate: any;
    getPageStrip: () => any;
    getPages: () => Element[];
    getPageLabels: () => string[];
    getPageByIndex: (idx?: number) => Element;
    getPageByNumber: (n: number) => Element;
    getCurrentPage: () => Element;
    getNavButton: (name: "first" | "previous" | "next" | "last") => Element;
    getPageInput: () => HTMLInputElement;
    getTotalPagesField: () => Element;
    clickNavButton: (name: "first" | "previous" | "next" | "last") => void;
    clickPage: (page: number) => void;
    changeInput: (newValue: string) => void;
    commitInput: () => void;
    blurInput: () => void;
    inputHasError: () => boolean;
};
export declare const badgeTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getType: () => any;
    getContent: () => any;
    getContentText: () => any;
};
export declare const tooltipTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    styles: {
        getBackgroundColor: () => string;
        getBorderWidth: () => string;
        getBorderStyle: () => string;
        getBorderColor: () => string;
        getBorderRadius: () => string;
        getContentPadding: () => string;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => Element;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const dividerTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isVertical: () => boolean;
    textContent: () => any;
    element: any;
};
export declare const checkboxTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    element: () => any;
    exists: () => boolean;
    click: () => any;
    keyDown: (key: string) => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    focus: () => any;
    isChecked: () => boolean;
    isIndeterminate: () => boolean;
    isDisabled: () => boolean;
    children: () => Element;
    tickmark: () => Element;
    input: () => HTMLInputElement;
    hasErrorState: () => boolean;
    hasFocusState: () => boolean;
    hasReadOnlyState: () => boolean;
};
export declare const toggleSwitchTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    click: () => void;
    isChecked: () => any;
    isDisabled: () => any;
    getKnobIcon: () => any;
    hasKnobIcon: () => boolean;
    getId: () => any;
    getTabIndex: () => any;
    getRootStyles: () => CSSStyleDeclaration;
    getTrackStyles: () => CSSStyleDeclaration;
    getKnobStyles: () => CSSStyleDeclaration;
    getKnobIconStyles: () => CSSStyleDeclaration;
};
export declare const stylableTextTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    isEllipsis: () => boolean;
    hasTitleAttribute: () => boolean;
    getTagName: () => any;
    getChildren: () => any;
};
export declare const buttonTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    click: () => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    getType: () => any;
    getTextContent: () => any;
    isDisabled: () => boolean;
    styles: {
        getMinWidth: () => string;
        getWidth: () => string;
        getHeight: () => string;
        getPadding: () => string;
        getBorderRadius: () => string;
    };
};
export declare const stylableBadgeTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getType: () => any;
    getContent: () => any;
    text: () => any;
};
export declare const radioButtonTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    select: () => any;
    value: () => string;
    name: () => string;
    isInputFocused: () => boolean;
    isRequired: () => boolean;
    iconExists: () => boolean;
    labelExists: () => boolean;
    isChecked: () => boolean;
    isFocused: () => boolean;
    isDisabled: () => boolean;
};
export declare const autocompleteTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    hasStyleState: (stateName: any) => boolean;
    getInput: () => any;
    getValue: () => any;
    getPlaceholder: () => any;
    getPrefix: () => any;
    getSuffix: () => any;
    isDisabled: () => any;
    setValue: (value: any) => void;
    focus: () => any;
    blur: () => any;
    keyDown: (key: any) => any;
} & {
    exists: () => boolean;
    getOptionsCount: () => any;
    optionAt: (index: number) => {
        exists: () => boolean;
        click: () => any;
        mouseEnter: () => any;
        className: () => any;
        isHovered: () => boolean;
        isSelected: () => boolean;
        isDisabled: () => boolean;
        getText: () => any;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => Element;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const sliderTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    value: () => number;
    min: () => number;
    max: () => number;
    vertical: () => boolean;
    thumb: () => any;
    tooltip: () => any;
    ticks: () => any;
    track: () => any;
    rtl: () => boolean;
    root: () => any;
    mouseMove(value: any): void;
    mouseDown(): void;
    mouseUp(): void;
    focus(): void;
    blur(): void;
    arrowLeft(): void;
    arrowRight(): void;
    arrowUp(): void;
    arrowDown(): void;
    pageUp(): void;
    pageDown(): void;
    home(): void;
    end(): void;
    stubTrackBoundingRect(rect?: any): void;
    stubRootBoundingRect(rect?: any): void;
    getTrackBoundingRect(): any;
    getRootBoundingRect(): any;
    getThumbSize(): any;
    getOffsetByValue(value: any): number;
    change(value?: number): void;
    hoverThumb(): void;
    unhoverThumb(): void;
    dragThumb(offset: any): void;
    thumbTooltipValue(): any;
    clickTick(tickIdx: any): void;
    clickSlider(value: any): void;
    forceUpdate(): void;
};
export declare const addressInputTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    hasStyleState: (stateName: any) => boolean;
    getInput: () => any;
    getValue: () => any;
    getPlaceholder: () => any;
    getPrefix: () => any;
    getSuffix: () => any;
    isDisabled: () => any;
    setValue: (value: any) => void;
    focus: () => any;
    blur: () => any;
    keyDown: (key: any) => any;
} & {
    exists: () => boolean;
    getOptionsCount: () => any;
    optionAt: (index: number) => {
        exists: () => boolean;
        click: () => any;
        mouseEnter: () => any;
        className: () => any;
        isHovered: () => boolean;
        isSelected: () => boolean;
        isDisabled: () => boolean;
        getText: () => any;
    };
} & {
    exists: () => boolean;
    getTargetElement: () => Element;
    getContentElement: () => Element;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    getArrowOffset: () => {
        top: string;
        left: string;
        right: string;
        bottom: string;
    };
};
export declare const labelTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getLabelText: () => any;
    getId: () => any;
    getForAttribute: () => any;
};
export declare const timePickerTestkitFactory: (obj: {
    wrapper: HTMLDivElement;
    dataHook: string;
}) => {
    exists: () => boolean;
    getInputElement: () => any;
    isDisabled: () => any;
    getInputType: () => any;
    getValue: () => any;
    keyDown: (key: any) => any;
    focus: () => any;
    blur: () => any;
    styles: {
        getRootDisplay: () => string;
        getBorderRadius: () => string;
    };
};
