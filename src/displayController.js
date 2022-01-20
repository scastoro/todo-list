import PubSub from "pubsub-js";

const displayController = () => {
  // Helper function to clear current page view and allow for new view to be appended to content div
  const clearView = () => {
    const contentDiv = document.querySelector('#content');
    while(contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
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
  // All projects view
  const createAllProjectsListeners = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');
    const inputValue = document.querySelector('#project-name-input');

    newProjectBtn.addEventListener('click', function (event) {
      event.preventDefault();
      PubSub.publish('new project button clicked', inputValue.value);
      inputValue.value = '';
      clearView();
    });
  }

  function printData(data) {
    console.log(data);
  }
  PubSub.subscribe('todo clicked', function (msg, data) {
    printData(data);
  });

  PubSub.subscribe('all projects rendered', function(msg, data){
    createAllProjectsListeners();
  });

  createProjectListeners();
  createAllProjectsListeners();
}

export { displayController };