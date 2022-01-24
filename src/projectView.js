import PubSub from "pubsub-js";
import { parseISO, format } from "date-fns";

const renderProjectView = (project) => {
  const contentDiv = document.querySelector('#content');
  while(contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  
  const projectContainer = document.createElement('div');
  projectContainer.classList.toggle('project-container');

  const headerDiv = document.createElement('div');
  headerDiv.classList.toggle('header-div');

  const headerDivLeft = document.createElement('div');
  headerDivLeft.classList.toggle('header-div-left');

  const projectHeader = document.createElement('h1');
  projectHeader.classList.toggle('project-header');
  projectHeader.appendChild(document.createTextNode(`${project.name}`));
  // Maybe add a Project name data attr somewhere so the new todos can access the value and pass it to the todoApp.js module
  projectHeader.setAttribute('data-project-name', project.name);

  headerDivLeft.appendChild(projectHeader);

  const addTodoBtn = document.createElement('button');
  addTodoBtn.id = 'add-todo-btn';
  addTodoBtn.classList.toggle('btn');
  addTodoBtn.type = 'button';
  addTodoBtn.appendChild(document.createTextNode('Add Todo'));

  headerDivLeft.appendChild(addTodoBtn);
  headerDiv.appendChild(headerDivLeft);

  const headerDivRight = document.createElement('div');
  headerDivRight.classList.toggle('header-div-right');

  const viewProjectsBtn = document.createElement('button');
  viewProjectsBtn.id = 'view-projects-btn';
  viewProjectsBtn.classList.toggle('btn');
  viewProjectsBtn.type = 'button';
  viewProjectsBtn.appendChild(document.createTextNode('View Projects'));

  headerDivRight.appendChild(viewProjectsBtn);
  headerDiv.appendChild(headerDivRight);

  const todoContainer = document.createElement('div');
  todoContainer.classList.toggle('todo-container');

  const todoHeader = document.createElement('h2');
  todoHeader.classList.toggle('todo-header');
  todoHeader.appendChild(document.createTextNode('Todos'));

  todoContainer.appendChild(todoHeader);

  const todoList = document.createElement('ul');
  todoList.classList.toggle('todo-list');

  // Probably need to add a data-attr for project
  // Allows for accessing project object key when selecting li
  if (project.getTodos()) {
    project.getTodos().forEach((todo, index) => {
      const todoItem = document.createElement('li');
      todoItem.classList.toggle('todo-li');
      todoItem.setAttribute('data-todo-index', index);
      todoItem.setAttribute('data-project-name', project.name);

      const todoDiv = document.createElement('div');
      todoDiv.classList.toggle('todo-div');

      const todoName = document.createElement('p');
      todoName.appendChild(document.createTextNode(todo.name));

      const todoDate = document.createElement('p');
      const dateString = `Date Due: ${format(parseISO(todo.dueDate), 'MMMM do yyyy')}`
      todoDate.appendChild(document.createTextNode(dateString));

      todoDiv.appendChild(todoName);
      todoDiv.appendChild(todoDate);
      todoItem.appendChild(todoDiv)

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.toggle('btn-div')

      const editBtn = document.createElement('button');
      editBtn.classList.toggle('btn');
      editBtn.classList.toggle('edit-btn');
      editBtn.type = 'button';
      editBtn.appendChild(document.createTextNode('Edit Todo'));
      editBtn.setAttribute('data-todo-index', index);
      editBtn.setAttribute('data-project-name', project.name);
      buttonDiv.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.toggle('btn');
      deleteBtn.classList.toggle('delete-btn');
      deleteBtn.type = 'button';
      deleteBtn.appendChild(document.createTextNode('Delete Todo'));
      deleteBtn.setAttribute('data-todo-index', index);
      deleteBtn.setAttribute('data-project-name', project.name);

      buttonDiv.appendChild(deleteBtn);

      todoDiv.appendChild(buttonDiv);

      const expandedContainer = document.createElement('div');
      expandedContainer.classList.toggle('todo-list-expanded');
      expandedContainer.style.display = 'none';

      const attrList = document.createElement('ul');

      const description = document.createElement('li');
      description.appendChild(document.createTextNode(todo.description));

      const priority = document.createElement('li');
      priority.appendChild(document.createTextNode(todo.priority));

      const notes = document.createElement('li');
      notes.appendChild(document.createTextNode(todo.notes));

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.toggle('button-container');

      const inputDiv = document.createElement('div');
      inputDiv.classList.toggle('input-div');

      const complete = document.createElement('input');
      complete.type = 'Checkbox';
      complete.id = 'complete'
      complete.name = 'complete'
      if (todo.complete) {
        complete.checked = 'yes';
      }

      const completeLabel = document.createElement('label');
      completeLabel.for = 'complete';
      completeLabel.appendChild(document.createTextNode('Todo Complete'));

      inputDiv.appendChild(complete);
      inputDiv.appendChild(completeLabel);
      buttonContainer.appendChild(inputDiv);

      attrList.appendChild(description);
      attrList.appendChild(priority);
      attrList.appendChild(notes);


      expandedContainer.appendChild(attrList);
      expandedContainer.appendChild(buttonContainer);

      todoItem.append(expandedContainer);      
      todoList.appendChild(todoItem);
    });
  }

  todoContainer.appendChild(todoList);

  projectContainer.appendChild(headerDiv);
  projectContainer.appendChild(todoContainer);
  contentDiv.appendChild(projectContainer);

  PubSub.publish('project view rendered', project);

}
// Render page when project clicked on allProjects view
PubSub.subscribe('project returned', function (msg, data) {
  renderProjectView(data);
})
// Render page when new todo added
PubSub.subscribe('todo added', function (msg, data) {
  renderProjectView(data);
});
// Re-render when todo updated
PubSub.subscribe('todo updated', function (msg, data) {
  renderProjectView(data);
});
// Re-render when todo deleted
PubSub.subscribe('todo deleted', function (msg, data) {
  renderProjectView(data);
});

const projectTestObj = {
  name: 'Default',
  todos: [
    {
      name: 'Buy Groceries',
      date: 'Jan 2nd'
    },
    {
      name: 'Buy Groceries',
      date: 'Jan 2nd'
    },
    {
      name: 'Buy Groceries',
      date: 'Jan 2nd'
    },
  ]
}


export { renderProjectView, projectTestObj };