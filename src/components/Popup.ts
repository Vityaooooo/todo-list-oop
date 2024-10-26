export interface IPopup {
    content: HTMLElement;
    open(): void;
    close(): void;
}

export class Popup implements IPopup {
    protected closeButton: HTMLButtonElement;
    protected _content: HTMLElement;

    constructor(protected container: HTMLElement) {
        this._content = container.querySelector('.popup__content');
        this.closeButton = container.querySelector('.popup__close');
    
        this.closeButton.addEventListener('click', this.close.bind(this));
        this.container.addEventListener('click', this.close.bind(this));
        this._content.addEventListener('click', (evt) => evt.stopPropagation());
    }

    open() {
        this.container.classList.add('popup_is-opened');
    }

    close() {
        this.container.classList.remove('popup_is-opened');
        this.content = null;
    }

    set content(value: HTMLElement) {
        this._content.replaceChildren(value);
    }
}