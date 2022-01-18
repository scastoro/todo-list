import PubSub from "pubsub-js";

const displayController = () => {
  // Create event listeners for specific views
  const createProjectListeners = () => {
    const addTodoBtn = document.querySelector('#add-todo-btn');

    addTodoBtn.addEventListener('click', function(event){
      const eventObj = {};
      eventObj.index = 1;
      eventObj.parent = event.target.parentNode;
      PubSub.publish('add todo button clicked', eventObj);
    }
  )};
  PubSub.subscribe('add todo button clicked', function(msg, data){
    console.log(msg, data)
  })
  createProjectListeners();
}

export {displayController};