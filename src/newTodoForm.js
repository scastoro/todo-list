import PubSub from "pubsub-js";

// Form to be rendered when todo button is clicked
export const renderTodoForm = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.toggle('new-todo-form-container');

  const formDiv = document.createElement('div');
  formDiv.classList.toggle('todo-form-div');

  const todoHeader = document.createElement('h3');
  todoHeader.id = 'new-todo-header';
  todoHeader.appendChild(document.createTextNode('Add New Todo'));

  formDiv.appendChild(todoHeader);

  const todoForm = document.createElement('form');
  todoForm.id = 'todo-form'

  const nameInput = document.createElement('input');
  nameInput.id = 'todo-name';
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  nameInput.name = 'todo-name';

  todoForm.appendChild(nameInput);
  
  const descriptionInput = document.createElement('input');
  descriptionInput.id = 'todo-description';
  descriptionInput.type = 'text';
  descriptionInput.placeholder = 'Description';
  descriptionInput.description = 'todo-description';

  todoForm.appendChild(descriptionInput);

  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'todo-dueDate';
  dueDateInput.type = 'text';
  dueDateInput.placeholder = 'Due date';
  dueDateInput.dueDate = 'todo-dueDate';

  todoForm.appendChild(dueDateInput);

  const priorityInput = document.createElement('input');
  priorityInput.id = 'todo-priority';
  priorityInput.type = 'text';
  priorityInput.placeholder = 'priority';
  priorityInput.priority = 'todo-priority';

  todoForm.appendChild(priorityInput);

  const completePara = document.createElement('p');
  completePara.appendChild(document.createTextNode('Todo Complete?'))

  todoForm.appendChild(completePara);

  const completeYesInput = document.createElement('input');
  completeYesInput.id = 'todo-complete-yes';
  completeYesInput.type = 'radio';
  completeYesInput.value = 'Yes';
  completeYesInput.name = 'todo-complete';

  todoForm.appendChild(completeYesInput);

  const completeYesLabel = document.createElement('label');
  completeYesLabel.for = 'Yes';
  completeYesLabel.appendChild(document.createTextNode('Yes'));

  todoForm.appendChild(completeYesLabel);

  const completeNoInput = document.createElement('input');
  completeNoInput.id = 'todo-complete-no';
  completeNoInput.type = 'radio';
  completeNoInput.value = 'No';
  completeNoInput.name = 'todo-complete';

  todoForm.appendChild(completeNoInput);

  const completeNoLabel = document.createElement('label');
  completeNoLabel.for = 'No';
  completeNoLabel.appendChild(document.createTextNode('No'));

  todoForm.appendChild(completeNoLabel);

  const todoSubmitBtn = document.createElement('input');
  todoSubmitBtn.type = 'button';
  todoSubmitBtn.value = 'Add todo';
  todoSubmitBtn.id ='new-todo-submit-btn';

  todoForm.appendChild(todoSubmitBtn);


  formDiv.appendChild(todoForm);
  formContainer.appendChild(formDiv);
  document.body.appendChild(formContainer);

  PubSub.publish('new todo form rendered')
}

// Subscribe to when add todo button is clicked
PubSub.subscribe('add todo button clicked', function(msg, data){
  renderTodoForm();
})