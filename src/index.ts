import "./styles/styles.css"

import { todos } from './utils/constants';
import { Item } from './components/Item';
import { Form } from './components/Form';
import { Page } from './components/Page';
import { ToDoModel } from './components/ToDoModel';
import { ItemPresenter } from './components/ToDoPresenter';
import { Popup } from './components/Popup';

const contentElement = document.querySelector('.content') as HTMLElement;
const popupElement = document.querySelector('.popup') as HTMLElement;

const page = new Page(contentElement);

const modal = new Popup(popupElement) ;

const todoArr = new ToDoModel();
todoArr.items = todos;

const itemPresenter = new ItemPresenter(todoArr, Form, page, Item, modal);

itemPresenter.init();
itemPresenter.renderView();


