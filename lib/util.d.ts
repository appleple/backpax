export declare const getRandomId: () => string;
export declare const getScrollTop: () => number;
export declare const getScrollLeft: () => number;
export declare const getOffset: (el: HTMLElement) => {
    top: number;
    left: number;
};
export declare const debounce: (func: () => void, wait: number, immediate?: boolean) => () => void;
