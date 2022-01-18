const createProject = (name, todos) => {
  if(typeof todos === 'undefined'){
    todos = [];
  }

  const getTodo = (index) => {
    return todos[index];
  }

  const addTodo = (todo) => {
    todos.push(todo);
  }

  return {name, getTodo, addTodo};
}

export default createProject; 