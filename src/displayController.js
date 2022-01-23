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
    const todoDeleteBtn = document.querySelectorAll('.delete-btn');
    const todoEditBtn = document.querySelectorAll('.edit-btn');
    const todoListExpanded = document.querySelectorAll('.todo-list-expanded');

    addTodoBtn.addEventListener('click', function (event) {
      PubSub.publish('add todo button clicked', event);
    });

    viewProjectsBtn.addEventListener('click', function (event) {
      PubSub.publish('view projects button clicked', event);
    });

    todoListItem.forEach(item => {
      item.addEventListener('click', function (event) {
        console.log(event.target);
        if(event.currentTarget.lastChild.style.display === 'none'){
          event.currentTarget.lastChild.style.display = 'block';
        }else {
          event.currentTarget.lastChild.style.display = 'none';
        }
        event.currentTarget.firstChild.classList.toggle('expanded');
      });
    });

    todoListExpanded.forEach(item => {
      item.addEventListener('click', function(event){
        event.stopPropagation();
      })
    })

    todoEditBtn.forEach(item => {
      item.addEventListener('click', function (event) {
        event.stopPropagation();
        const todoInfo = {};
        todoInfo.index = event.currentTarget.getAttribute('data-todo-index');
        todoInfo.name = event.currentTarget.getAttribute('data-project-name');
        console.log(todoInfo);
        console.log(event.currentTarget);
        PubSub.publish('todo edit button clicked', todoInfo);
      });
    });

    todoDeleteBtn.forEach(item => {
      item.addEventListener('click', function (event) {
        event.stopPropagation();
        const todoInfo = {};
        todoInfo.index = event.currentTarget.getAttribute('data-todo-index');
        todoInfo.name = event.currentTarget.getAttribute('data-project-name');
        PubSub.publish('todo delete button clicked', todoInfo);
      });
    });
  };
  // All projects view event listeners
  const createAllProjectsListeners = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    const inputValue = document.querySelector('#project-name-input');
    const projectDivs = document.querySelectorAll('.project-div');

    projectDivs.forEach(project => {
      project.addEventListener('click', function(event){
        console.log(event.currentTarget);
        PubSub.publish('project clicked', event.currentTarget.getAttribute('data-project-index'));

      });
    });

    newProjectBtn.addEventListener('click', function (event) {
      event.preventDefault();
      PubSub.publish('new project button clicked', inputValue.value);
      inputValue.value = '';
    });
  }
  // New todo form event listeners
  const createTodoFormListeners = () => {
    const todoForm = document.querySelector('#todo-form');
    let todoFormBtn;
    if(todoForm.hasAttribute('data-todo-index')) {
      todoFormBtn = document.querySelector('#edit-todo-submit-btn');
    } else {
      todoFormBtn = document.querySelector('#new-todo-submit-btn');
    }
    const newTodoRadioBtn = document.querySelector('#todo-complete-yes');
    const projectHeader = document.querySelector('.project-header');
    const todoFormContainer = document.querySelector('.new-todo-form-container');

    const getFormInput = () => {
      const name = todoForm['todo-name'].value;
      const description = todoForm['todo-description'].value;
      const dueDate = todoForm['todo-dueDate'].value;
      const priority = todoForm['todo-priority'].value;
      let complete;
      if(newTodoRadioBtn.checked){
        complete = true;
      }else {
        complete = false;
      }
      const project = projectHeader.getAttribute('data-project-name');

      const newTodo = createTodo(name, description, dueDate, priority, complete, project);

      if(todoForm.hasAttribute('data-todo-index')){
        let newTodoInfo = {};
        newTodoInfo.index = todoForm.getAttribute('data-todo-index');
        newTodoInfo.todo = newTodo;
        PubSub.publish('edit todo submitted', newTodoInfo);
      }else {
        PubSub.publish('new todo submitted', newTodo);
      }
      
    }

    todoFormBtn.addEventListener('click', function() {
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

  PubSub.subscribe('all projects view rendered', function(msg, data){
    createAllProjectsListeners();
  });

  PubSub.subscribe('project view rendered', function(msg, data){
    createProjectListeners();
  })

  PubSub.subscribe('new todo form rendered', function(msg, data){
    createTodoFormListeners();
  });

  PubSub.subscribe('edit todo form rendered', function(msg, data){
    createTodoFormListeners();;
  })
  
  // createProjectListeners();
  // createAllProjectsListeners();

  window.addEventListener('load', function(){
    PubSub.publish('initial page load');
  }, {once: true});
}

export { displayController };