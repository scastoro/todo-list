import PubSub from "pubsub-js";

// Form to be rendered when todo button is clicked
export const renderTodoForm = (obj) => {
  console.log(obj);
  const formContainer = document.createElement('div');
  formContainer.classList.toggle('new-todo-form-container');

  const formDiv = document.createElement('div');
  formDiv.classList.toggle('todo-form-div');

  const todoHeader = document.createElement('h3');
  todoHeader.id = 'new-todo-header';
  if(obj){
    todoHeader.appendChild(document.createTextNode('Edit Todo'));
  } else {
    todoHeader.appendChild(document.createTextNode('Add New Todo'));
  }

  formDiv.appendChild(todoHeader);

  const todoForm = document.createElement('form');
  todoForm.id = 'todo-form'
  if(obj){
    todoForm.setAttribute('data-todo-index', obj.index)
  }

  const nameInput = document.createElement('input');
  nameInput.id = 'todo-name';
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  nameInput.name = 'todo-name';
  if(obj){
    nameInput.value = obj.name
  }

  todoForm.appendChild(nameInput);
  
  const descriptionInput = document.createElement('input');
  descriptionInput.id = 'todo-description';
  descriptionInput.type = 'text';
  descriptionInput.placeholder = 'Description';
  descriptionInput.description = 'todo-description';
  if(obj){
    descriptionInput.value = obj.description
  }

  todoForm.appendChild(descriptionInput);

  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'todo-dueDate';
  dueDateInput.type = 'date';
  dueDateInput.placeholder = 'Due date';
  dueDateInput.dueDate = 'todo-dueDate';
  if(obj){
    dueDateInput.value = obj.dueDate
  }

  todoForm.appendChild(dueDateInput);

  const priorityDiv = document.createElement('div');
  priorityDiv.classList.toggle('priority-div');

  const priorityLabel = document.createElement('label');
  priorityLabel.for = 'todo-priority';
  priorityLabel.appendChild(document.createTextNode('Priority Level:'));

  priorityDiv.appendChild(priorityLabel);

  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'todo-priority';
  prioritySelect.name = 'todo-priority';
  if(obj){
    prioritySelect.value = obj.priority
  }

  const priorityOptHigh = document.createElement('option');
  priorityOptHigh.value = 'high';
  priorityOptHigh.appendChild(document.createTextNode('High'));
  prioritySelect.appendChild(priorityOptHigh);
 
  const priorityOptMedium = document.createElement('option');
  priorityOptMedium.value = 'medium';
  priorityOptMedium.appendChild(document.createTextNode('Medium'));
  prioritySelect.appendChild(priorityOptMedium);
 
  const priorityOptLow = document.createElement('option');
  priorityOptLow.value = 'low';
  priorityOptLow.appendChild(document.createTextNode('Low'));
  prioritySelect.appendChild(priorityOptLow);
 
  priorityDiv.appendChild(prioritySelect);
  todoForm.appendChild(priorityDiv);

  const completeDiv = document.createElement('div');
  completeDiv.classList.toggle('complete-div');

  const completeLabel = document.createElement('label');
  completeLabel.appendChild(document.createTextNode('Todo Complete?'))

  completeDiv.appendChild(completeLabel);

  const completeYesInput = document.createElement('input');
  completeYesInput.id = 'todo-complete-yes';
  completeYesInput.type = 'radio';
  completeYesInput.value = 'Yes';
  completeYesInput.name = 'todo-complete';
  if(obj){
    if(obj.complete){
      completeYesInput.checked = true;
    }
  }

  completeDiv.appendChild(completeYesInput);

  const completeYesLabel = document.createElement('label');
  completeYesLabel.for = 'Yes';
  completeYesLabel.appendChild(document.createTextNode('Yes'));

  completeDiv.appendChild(completeYesLabel);

  const completeNoInput = document.createElement('input');
  completeNoInput.id = 'todo-complete-no';
  completeNoInput.type = 'radio';
  completeNoInput.value = 'No';
  completeNoInput.name = 'todo-complete';
  if(obj){
    if(!obj.complete){
      completeNoInput.checked = true;
    }
  }

  completeDiv.appendChild(completeNoInput);

  const completeNoLabel = document.createElement('label');
  completeNoLabel.for = 'No';
  completeNoLabel.appendChild(document.createTextNode('No'));

  completeDiv.appendChild(completeNoLabel);
  todoForm.appendChild(completeDiv);

  const todoSubmitBtn = document.createElement('input');
  todoSubmitBtn.type = 'button';

  if(obj){
    todoSubmitBtn.value = 'Edit todo';
    todoSubmitBtn.id ='edit-todo-submit-btn';
  } else {
    todoSubmitBtn.value = 'Add todo';
    todoSubmitBtn.id ='new-todo-submit-btn';
  }

  todoForm.appendChild(todoSubmitBtn);

  formDiv.appendChild(todoForm);
  formContainer.appendChild(formDiv);
  document.body.appendChild(formContainer);

  if(obj){
    PubSub.publish('edit todo form rendered');
  }else {
    PubSub.publish('new todo form rendered')
  }
  
}
// Subscribe to when add todo button is clicked
PubSub.subscribe('add todo button clicked', function(msg, data){
  renderTodoForm();
});
// Subscribe to when edit todo data is returned
PubSub.subscribe('edit todo returned', function(msg, data){
  renderTodoForm(data);
});