export const expandedTodo = (obj, event) => {

  // const currentDiv = event.target
  const expandedContainer = document.createElement('div');
  expandedContainer.classList.toggle('todo-list-expanded');

  const attrList = document.createElement('ul');

  const description = document.createElement('li');
  description.appendChild(document.createTextNode(obj.description));

  const priority = document.createElement('li');
  priority.appendChild(document.createTextNode(obj.priority));

  const notes = document.createElement('li');
  notes.appendChild(document.createTextNode(obj.notes));

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.toggle('button-container');

  const inputDiv = document.createElement('div');
  inputDiv.classList.toggle('input-div');

  const complete = document.createElement('input');
  complete.type = 'Checkbox';
  complete.id = 'complete'
  complete.name = 'complete'
  if(complete) {
    complete.checked = 'yes';
  } 

  const completeLabel = document.createElement('label');
  completeLabel.for = 'complete';
  completeLabel.appendChild(document.createTextNode('Todo Complete'));

  const editBtn = document.createElement('button');
  editBtn.classList.toggle('todo-edit-btn');
  editBtn.appendChild(document.createTextNode('Edit todo'));

  inputDiv.appendChild(complete);
  inputDiv.appendChild(completeLabel);
  buttonContainer.appendChild(inputDiv);
  buttonContainer.appendChild(editBtn);

  attrList.appendChild(description);
  attrList.appendChild(priority);
  attrList.appendChild(notes);
  

  expandedContainer.appendChild(attrList);
  expandedContainer.appendChild(buttonContainer);

  document.body.firstElementChild.appendChild(expandedContainer);
}

export const testObj = {
  description: 'This is a test Description',
  priority: 1,
  notes: 'Here are some notes',
  complete: true
}
