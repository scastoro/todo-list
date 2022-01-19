import PubSub, { publish } from "pubsub-js";
import createTodo from "./createTodo";
import createProject from "./createProject";

export const todoApp = () => {
  const projects = [];

  // Create project objects with empty todos array property
  const addProject = (projectName) => {
    projects.forEach(project => {
      if(project.name === projectName){
        console.log('Project name already used');
        PubSub.publish('Project name already in use', projectName);
      }
    });
    projects.push(createProject(projectName));
    console.log(`${projectName} added!`);
    PubSub.publish('project added', projects);
  }

  addProject('test');

  // Add todo by searching projects list and pushing todo argument to todos property
  const addTodo = (projectName, todo) => {
    projects.forEach(project => {
      if (project.name === projectName) {
        project.addTodo(todo);
        PubSub.publish('todo added', project.todos);
      }
    });

  }

  addTodo('test', 'todo');

  // Get project

  const getProject = (projectName) => {
    projects.forEach(project => {
      if (project.name === projectName) {
        PubSub.publish('project returned', project);
        console.dir(project);
      } else {
        PubSub.publish('project not found', projectName);
        console.log('Project not found');
      }
    });
  }
  getProject('test');
  // Get todos
  const getTodos = (projectName) => {
    // Iterate through projects and find if name is present then check if todo is present at index argument
    projects.forEach(project => {
      if (project.name === projectName) {
        PubSub.publish('todos returned', project.getTodos());
        console.log(project.getTodos());
      } else {
        PubSub.publish('Project not found', projectName);
        console.log('Project not found');
      }
    });
  }

  getTodos('test');

  // Get todo
  const getTodo = (obj) => {
    // Iterate through projects and find if name is present then check if todo is present at index argument
    projects.forEach(project => {
      if (project.name === obj.name /* && project.todos[obj.index]*/) {
        PubSub.publish('todo returned', project.getTodo(obj.index));
        console.log(project.getTodo(obj.index));
      } else {
        PubSub.publish('todo not found', obj);
        console.log('todo not found');
      }
    });
  }
  const testObject = {
    name: 'test',
    index: '0'
  }

  getTodo(testObject);

  // Update todo
  const updateTodo = (obj) => {
    projects.forEach(project => {
      if (project.name === obj.projectName) {
        project.updateTodo(obj.index, obj.todo)
        PubSub.publish('todo updated', project.getTodos());
        console.log(project.getTodos());
      } else {
        console.log('todo not found');
        PubSub.publish('todo not found', projectName);
      }
    });
  }
  const testObject2 = {
    projectName: 'test',
    index: 0,
    todo: 'updated todo'
  }
  updateTodo(testObject2)
  // Update Project

  // Delete Project
  const deleteProject = (projectName) => {
    projects.forEach((project, index) => {
      if(project.name === projectName){
        projects.splice(index, 1);
        console.log(`${project} deleted`);
        PubSub.publish('project deleted', projects)
      } else {
        PubSub.publish('project not found', projectName);
        console.log('Project not found');
      }
    });
  }
  // Delete Todo
  const deleteTodo = (obj) => {
    projects.forEach(project => {
      if(project.name === obj.projectName){
        console.log(`${project.getTodo(obj.index)} deleted`);
        project.deleteTodo(obj.index);
        PubSub.publish('todo deleted', project.todos)
      } else {
        PubSub.publish('todo not found', obj);
        console.log('todo not found');
      }
    });
  }

  deleteTodo(testObject2);
  getTodos('test');

  // Add subscribe events from PubSub module
  // Need to listen to corresponding click events from the displayController
}
