import PubSub from "pubsub-js";
import createTodo from "./createTodo";

const displayController = () => {
  // Helper function to clear current page view and allow for new view to be appended to content div
  const contentDiv = document.querySelector('#content');

  const clearView = (parent) => {
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // Create event listeners for specific views
  // Project View
  const createProjectListeners = () => {
    const addTodoBtn = document.querySelector('#add-todo-btn');
    const viewProjectsBtn = document.querySelector('#view-projects-btn');
    const todoListItem = document.querySelectorAll('.todo-li');
    const todoDeleteBtn = document.querySelectorAll('#delete-btn');

    addTodoBtn.addEventListener('click', function (event) {
      PubSub.publish('add todo button clicked', event);
    });

    viewProjectsBtn.addEventListener('click', function (event) {
      PubSub.publish('view projects button clicked', event);
    });

    todoListItem.forEach(item => {
      item.addEventListener('click', function (event) {
        const todoInfo = {};
        todoInfo.index = event.currentTarget.getAttribute('data-todo-index');
        todoInfo.name = event.currentTarget.getAttribute('data-project-name');
        PubSub.publish('todo clicked', todoInfo);
      });
    });

    todoDeleteBtn.forEach(item => {
      item.addEventListener('click', function (event) {
        PubSub.publish('todo delete button clicked', event);
      });
    });
  };
  // All projects view event listeners
  const createAllProjectsListeners = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    const inputValue = document.querySelector('#project-name-input');

    newProjectBtn.addEventListener('click', function (event) {
      event.preventDefault();
      PubSub.publish('new project button clicked', inputValue.value);
      inputValue.value = '';
      clearView(contentDiv);
    });
  }
  // New todo form event listeners
  const createNewTodoFormListeners = () => {
    const newTodoFormBtn = document.querySelector('#new-todo-submit-btn');
    const newTodoForm = document.querySelector('#todo-form');
    const newTodoRadioBtn = document.querySelector('#todo-complete-yes');
    const projectHeader = document.querySelector('.project-header');
    const todoFormContainer = document.querySelector('.new-todo-form-container');

    const getFormInput = () => {
      const name = newTodoForm['todo-name'].value;
      const description = newTodoForm['todo-description'].value;
      const dueDate = newTodoForm['todo-dueDate'].value;
      const priority = newTodoForm['todo-priority'].value;
      let complete;
      if(newTodoRadioBtn.checked){
        complete = true;
      }else {
        complete = false;
      }
      const project = projectHeader.getAttribute('data-project-name');

      const newTodo = createTodo(name, description, dueDate, priority, complete, project);

      PubSub.publish('new todo submitted', newTodo);
      
    }

    newTodoFormBtn.addEventListener('click', function() {
      getFormInput()
      document.body.removeChild(todoFormContainer);
    }
    );
  }

  // Delete this when done
  function printData(data) {
    console.log(data);
  }

  // Pubsub event subscribers
  PubSub.subscribe('todo clicked', function (msg, data) {
    printData(data);
  });

  PubSub.subscribe('all projects rendered', function(msg, data){
    createAllProjectsListeners();
  });

  PubSub.subscribe('new todo form rendered', function(msg, data){
    createNewTodoFormListeners();
  })
  
  // createProjectListeners();
  createAllProjectsListeners();
}

export { displayController };