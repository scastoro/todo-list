import PubSub, { publish } from "pubsub-js";
import createTodo from "./createTodo";
import createProject from "./createProject";

const todoApp = () =>{
  const projects = {};

  const addProject = (projectName) => {
   projects[projectName] = {};
   projects[projectName].todos = [];

   PubSub.publish('project added', projects);
  }

  const addTodo = (projectName, todo) => {
    projects[projectName].todos.push(todo);

    PubSub.publish('todo added', projects[projectName].todos)
  }

  // Get project

  const getProject = (projectName) => {
    PubSub.publish('project returned', projects[projectName]);
    console.log('project returned');
  }

  // Get todo
  const getTodo = (obj) => {
    PubSub.publish('todo returned', projects[obj.projectName].todos[obj.index])
  }
  // Update todo
  const updateTodo = (obj) => {
    projects[obj.projectName].todos[obj.index] = obj.todo;
    PubSub.publish('todo updated', projects[obj.projectName].todos);
  }
  // Update Project

  // Delete Project
  const deleteProject = (projectName) => {
    delete projects[projectName];
    PubSub.publish('project deleted', projects)
  }
  // Delete Todo
  const deleteTodo = (obj) => {
    projects[obj.projectName].todos.splice(obj.index, 1);
    PubSub.publish('todo deleted', projects[obj.projectName].todos);
  }  


}

export {todoApp};