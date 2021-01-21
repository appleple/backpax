declare type Option = {
    speed: "auto" | number;
};
declare type Control = {
    ratio: number;
    speed: number;
};
declare type Item = {
    element: HTMLElement;
    insert: HTMLElement;
    elementOffsetHeight: number;
    insertOffsetHeight: number;
};
export default class Backpax {
    elements: NodeList;
    options: Option;
    controls: Control[];
    move: number;
    items: Item[];
    ticking: boolean;
    constructor(selector: string | NodeList, option?: {});
    setBestImg(element: HTMLElement, insert: HTMLElement, index: number): void;
    setup(): void;
    setImgRatio(element: HTMLElement, image: string, index: number): void;
    run(): void;
}
export {};
