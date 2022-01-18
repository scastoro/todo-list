import PubSub from "pubsub-js";
import createTodo from "./createTodo";
import createProject from "./createProject";

const todoApp = () =>{
  const projects = {};

  const addProject = (projectName) => {
   projects[projectName] = {};
   projects[projectName].todos = [];

  }

  const addTodo = (projectName, todo) => {
    projects[projectName].todos.push(todo);
  }

  // Get project

  // Get todo

  // Update todo
  
  // Update Project

  // Delete Todo
  
  // Delete Project


}

export {todoApp};