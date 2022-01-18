const renderProjectView = (project) => {
  const contentDiv = document.querySelector('#content');

  const projectContainer = document.createElement('div');
  projectContainer.classList.toggle('project-container');

  const headerDiv = document.createElement('div');
  headerDiv.classList.toggle('header-div');

  const headerDivLeft = document.createElement('div');
  headerDivLeft.classList.toggle('header-div-left');

  const projectHeader = document.createElement('h1');
  projectHeader.classList.toggle('project-header');
  projectHeader.appendChild(document.createTextNode(`${project.title}`));

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
  project.todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.toggle('todo-li');
    todoItem.setAttribute('data-todo-index', index);

    const todoDiv = document.createElement('div');
    todoDiv.classList.toggle('todo-div');

    const todoName = document.createElement('p');
    todoName.appendChild(document.createTextNode(todo.name));

    const todoDate = document.createElement('p');
    todoDate.appendChild(document.createTextNode(todo.date));

    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDate);
    todoItem.appendChild(todoDiv)

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete-btn';
    deleteBtn.classList.toggle('btn');
    deleteBtn.type = 'button';
    deleteBtn.appendChild(document.createTextNode('Delete Todo'));

    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });

  todoContainer.appendChild(todoList);

  projectContainer.appendChild(headerDiv);
  projectContainer.appendChild(todoContainer);
  contentDiv.appendChild(projectContainer);
}

const projectTestObj = {
  title: 'Project Test',
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

export {renderProjectView, projectTestObj};