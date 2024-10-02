import { IItem } from '../types/index';

export class Item {

    protected itemElement: HTMLElement;
    protected title: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
        this.title = this.itemElement.querySelector('.todo-item__text') as HTMLSpanElement;
    }

    render(item: IItem) {
        this.title.textContent = item.name;
        return this.itemElement;
    }
}