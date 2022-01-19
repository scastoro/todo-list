const createProject = (name, todos) => {
  if(typeof todos === 'undefined'){
    todos = [];
  }
  // Methods to read, update and delete todos
  const getTodo = (index) => {
    return todos[index];
  }

  const getTodos = () => {
    return todos;
  }

  const addTodo = (todo) => {
    todos.push(todo);
  }

  const updateTodo = (index, updatedTodo) => {
    todos[index] = updatedTodo;
  }

  const deleteTodo = (index) => {
    todos.splice(index, 1);
  }


  return {name, getTodo, getTodos, addTodo, updateTodo, deleteTodo};
}

export default createProject; 