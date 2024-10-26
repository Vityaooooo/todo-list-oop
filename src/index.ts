import "./styles/styles.css"

import { todos } from './utils/constants';
import { Item } from './components/Item';
import { Form } from './components/Form';
import { Page } from './components/Page';
import { ToDoModel } from './components/ToDoModel';

const contentElement = document.querySelector('.content') as HTMLElement; 

const itemTemplate = document.querySelector('#todo-item-template') as HTMLTemplateElement;
const formTemplate = document.querySelector('#todo-form-template') as HTMLTemplateElement;

function handleFormSubmit(data: string) {
    todoArr.addItem(data);
    todoForm.clearValue();
    renderTodoItems();
}

function renderTodoItems() {
    page.todoContainer = todoArr.items.map( (item) => {
        const todoItem = new Item(itemTemplate);
        const itemElement = todoItem.render(item);
        return itemElement;
    }).reverse();
}

const page = new Page(contentElement);
const todoArr = new ToDoModel();
todoArr.items = todos;

const todoForm = new Form(formTemplate);
todoForm.setHandler(handleFormSubmit);

page.formContainer = todoForm.render();

renderTodoItems();



