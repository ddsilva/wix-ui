export declare const inputTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    enterText: (text: any) => any;
    focus: () => any;
    getText: () => any;
};
export declare const paginationTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getElementLocation: (dataHook: any) => Promise<{
        x: number;
        y: number;
    }>;
    getElementSize: (dataHook: any) => Promise<{
        width: number;
        height: number;
    }>;
    getPageList(): Promise<string[]>;
};
export declare const badgeTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getTextContent: () => any;
};
export declare const tooltipTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getTargetElement: () => any;
    getContentElement: () => any;
    isTargetElementExists: () => any;
    isContentElementExists: () => any;
    mouseEnter: () => Promise<void>;
    mouseLeave: () => Promise<void>;
    click: () => any;
} & {
    getTooltipLocation: () => Promise<any>;
};
export declare const dividerTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    exists: () => boolean;
};
export declare const googleMapsIframeClientTestkitFactory: (obj: {
    dataHook: string;
}) => {
    getParsedResults: () => Promise<any>;
    getResultsElementWrapper: () => any;
    enterText: (text: string) => void;
    selectByValue: (value: string) => Promise<any>;
    element: () => any;
};
export declare const checkboxTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    click: () => any;
    isDisabled: () => boolean;
    isChecked: () => boolean;
};
export declare const textTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getTextContent: () => any;
};
export declare const radioButtonTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    select: () => any;
    isSelected: () => Promise<boolean>;
};
export declare const stylablebadgeTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    text: () => any;
};
export declare const autocompleteTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getTargetElement: () => any;
    getContentElement: () => any;
    isTargetElementExists: () => any;
    isContentElementExists: () => any;
    mouseEnter: () => Promise<void>;
    mouseLeave: () => Promise<void>;
    click: () => any;
} & {
    dropdownContent: () => {
        element: () => any;
        getOptionsCount: () => Promise<any>;
        optionAt: (index: number) => {
            element: () => any;
            click: () => any;
            getText: () => any;
        };
    };
} & {
    element: () => any;
    enterText: (text: any) => any;
    focus: () => any;
    getText: () => any;
};
export declare const sliderTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getSliderValue: () => any;
    getTooltipValue: () => Promise<any>;
    clickTrack: (position: any) => Promise<void>;
    dragThumb: (position: any) => Promise<void>;
    dragAndDropThumb: (position: any) => Promise<void>;
};
export declare const addressInputTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getTargetElement: () => any;
    getContentElement: () => any;
    isTargetElementExists: () => any;
    isContentElementExists: () => any;
    mouseEnter: () => Promise<void>;
    mouseLeave: () => Promise<void>;
    click: () => any;
} & {
    dropdownContent: () => {
        element: () => any;
        getOptionsCount: () => Promise<any>;
        optionAt: (index: number) => {
            element: () => any;
            click: () => any;
            getText: () => any;
        };
    };
} & {
    element: () => any;
    enterText: (text: any) => any;
    focus: () => any;
    getText: () => any;
};
export declare const labelTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    getLabelText: () => any;
};
export declare const timePickerTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
};
export declare const toggleSwitchTestkitFactory: (obj: {
    dataHook: string;
}) => {
    element: () => any;
    click: () => any;
    checked: () => any;
    isDisabled: () => boolean;
};
