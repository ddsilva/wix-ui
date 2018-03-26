export declare const dropdownContentDriverFactory: (component: any) => {
    element: () => any;
    getOptionsCount: () => Promise<any>;
    optionAt: (index: number) => {
        element: () => any;
        click: () => any;
        getText: () => any;
    };
};
