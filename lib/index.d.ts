declare type Option = {
    speed: "auto" | number;
};
export default class Pax {
    elements: NodeList;
    options: Option;
    move: number;
    constructor(selector: string | NodeList, option?: {});
    setup(): void;
    setImgRatio(element: HTMLElement, image: string): void;
    run(): void;
}
export {};
