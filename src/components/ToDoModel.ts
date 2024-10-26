import { IToDoModel, IItem } from '../types/index'

export class ToDoModel implements IToDoModel {
    protected _items: IItem[];

    constructor() {
        this._items = [];
    }

    get items() {
        return this._items;
    }

    set items(data: IItem[]) {
        this._items = data;
    }

    addItem(data: string) {
        const uniqueId = Math.max( ...this._items.map( (item) => Number(item.id))) + 1;
        const newItem: IItem = {id: String(uniqueId), name: data};
        this._items.push(newItem);
        return newItem;
    }

    removeItem(id: string) {
        this._items = this._items.filter( (item) => item.id !== id);
    }

    getItem(id: string) {
        return this._items.find( item => item.id === id);
    }
}