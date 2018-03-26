export declare const dropdownDriverFactory: (args: any) => {
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
