declare type Option = {
    speed: "auto" | number;
};
declare type Control = {
    ratio: number;
    speed: number;
};
export default class Backpax {
    elements: NodeList;
    options: Option;
    controls: Control[];
    move: number;
    constructor(selector: string | NodeList, option?: {});
    setBestImg(element: HTMLElement, insert: HTMLElement, index: number): void;
    setup(): void;
    setImgRatio(element: HTMLElement, image: string, index: number): void;
    run(): void;
}
export {};
