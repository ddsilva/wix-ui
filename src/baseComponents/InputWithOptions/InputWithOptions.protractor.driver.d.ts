export declare const inputWithOptionsDriverFactory: (component: any) => {
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
