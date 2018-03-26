export declare const tooltipDriverFactory: (component: any) => {
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
