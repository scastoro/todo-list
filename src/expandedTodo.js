const expandedTodo = (obj, event) => {

  // const currentDiv = event.target
  const attrList = document.createElement('ul');

  const description = document.createElement('li');
  description.appendChild(document.createTextNode(obj.description));

  const priority = document.createElement('li');
  priority.appendChild(document.createTextNode(obj.priority));

  const notes = document.createElement('li');
  notes.appendChild(document.createTextNode(obj.notes));

  const complete = document.createElement('input');
  complete.type = 'Checkbox';
  if(complete) {
    complete.checked = 'yes';
  } 

  attrList.appendChild(description);
  attrList.appendChild(priority);
  attrList.appendChild(notes);
  attrList.appendChild(complete);

  document.body.appendChild(attrList);
}

const testObj = {
  description: 'This is a test Description',
  priority: 1,
  notes: 'Here are some notes',
  complete: true
}