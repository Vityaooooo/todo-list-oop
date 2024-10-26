import "./styles/styles.css"

import { todos } from './utils/constants';
import { Item } from './components/Item';
import { Form } from './components/Form';
import { Page } from './components/Page';
import { ToDoModel } from './components/ToDoModel';
import { ItemPresenter } from './components/ToDoPresenter';

const contentElement = document.querySelector('.content') as HTMLElement;

const page = new Page(contentElement);

const todoArr = new ToDoModel();
todoArr.items = todos;

const itemPresenter = new ItemPresenter(todoArr, Form, page, Item);

itemPresenter.init();
itemPresenter.renderView();


