import PubSub from "pubsub-js";

const displayController = () => {
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
        event.stopImmediatePropagation();
        PubSub.publish('todo clicked', event.currentTarget);
      });
    }, true);

    todoDeleteBtn.forEach(item => {
      item.addEventListener('click', function (event) {
        PubSub.publish('todo delete button clicked', event);
      });
    });
  };
  // All projects view
  const createAllProjectsListeners = () => {
    const newProjectBtn = document.querySelector('#new-project-btn');

    newProjectBtn.addEventListener('click', function (event) {
      PubSub.publish('new project button clicked', event);
    })
  }

  function printData(data) {
    console.log(data);
  }
  PubSub.subscribe('todo clicked', function (msg, data) {
    printData(data);
  })

  createProjectListeners();
}

export { displayController };