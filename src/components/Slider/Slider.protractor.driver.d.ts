export declare const sliderDriverFactory: (component: any) => {
    element: () => any;
    getSliderValue: () => any;
    getTooltipValue: () => Promise<any>;
    clickTrack: (position: any) => Promise<void>;
    dragThumb: (position: any) => Promise<void>;
    dragAndDropThumb: (position: any) => Promise<void>;
};
