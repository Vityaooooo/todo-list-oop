import "./styles/styles.css"

import { todos } from './utils/constants';
import { Item } from './components/Item';
import { Form } from './components/Form';
import { ToDoModel } from './components/ToDoModel'

const contentElement = document.querySelector('.todos__list');

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formElement: HTMLFormElement = document.querySelector('.todos__form');

function handleFormSubmit(data: string) {
    const todoItem = new Item(template);
    const itemElement = todoItem.render({id: '8', name: data});
    contentElement.prepend(itemElement);
    todoForm.clearForm();
}

const todoForm = new Form(formElement, handleFormSubmit);

todos.forEach( (item) => {
    const todoItem = new Item(template);
    const itemElement = todoItem.render(item);
    contentElement.prepend(itemElement);
})

