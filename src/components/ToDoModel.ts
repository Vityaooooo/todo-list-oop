import { IToDoModel, IItem } from '../types/index';
import { EventEmitter } from './EventEmitter';

export class ToDoModel extends EventEmitter implements IToDoModel {
    protected _items: IItem[];

    constructor() {
        super();
        this._items = [];
    }

    get items() {
        return this._items;
    }

    set items(data: IItem[]) {
        this._items = data;
        this.emit('changed');
    }

    editItem(id: string, data: string) {
        const editedItem = this.getItem(id);
        editedItem.name = data;
        this.emit('changed');
    }

    addItem(data: string) {
        const uniqueId = Math.max( ...this._items.map( (item) => Number(item.id))) + 1;
        const newItem: IItem = {id: String(uniqueId), name: data};
        this._items.push(newItem);
        this.emit('changed');
        return newItem;
    }

    removeItem(id: string) {
        this._items = this._items.filter( (item) => item.id !== id);
        this.emit('changed');
    }

    getItem(id: string) {
        return this._items.find( item => item.id === id);
    }
}