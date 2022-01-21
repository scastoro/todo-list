import css from './style.css';
import {expandedTodo, testObj} from './expandedTodo';
import {renderProjectView, projectTestObj} from './projectView';
import {renderAllProjectsView, allProjectsTestObj} from './allProjectsView';
import {displayController} from './displayController';
import {todoApp} from './todoApp';
import {renderTodoForm} from './todoForm';

console.log('Hello there!')

let str = document.createTextNode('More Testing');

let header = document.createElement('h1');

// header.appendChild(str);

// expandedTodo(testObj);

// renderProjectView(projectTestObj);

// renderAllProjectsView();

// renderTodoForm();

displayController();

todoApp();