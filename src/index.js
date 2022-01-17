import css from './style.css';

console.log('Hello there!')

let str = document.createTextNode('More Testing');

let header = document.createElement('h1');

header.appendChild(str);

document.body.firstElementChild.appendChild(header);
