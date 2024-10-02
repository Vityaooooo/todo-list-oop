export function createItem(template: HTMLTemplateElement, name: string) {
    const itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
    const titleElement = itemElement.querySelector('.todo-item__text') as HTMLSpanElement;

    titleElement.textContent = name;

    return itemElement;
}