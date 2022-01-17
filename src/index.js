import css from './style.css';
import {expandedTodo, testObj} from './expandedTodo';

console.log('Hello there!')

let str = document.createTextNode('More Testing');

let header = document.createElement('h1');

header.appendChild(str);

expandedTodo(testObj);
