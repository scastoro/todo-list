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
  

  // Add todo by searching projects list and pushing todo argument to todos property
  const addTodo = (obj) => {
    projects.forEach(project => {
      if (project.name === obj.name) {
        project.addTodo(obj.todo);
        PubSub.publish('todo added', project.getTodos());
        console.dir(project.getTodos());
      }
    });

  }

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
  // Get all projects
  const getAllProjects = () => {
    return projects;
  }
  // Get todos
  const getAllTodos = (projectName) => {
    // Iterate through projects and find if name is present then check if todo is present at index argument
    projects.forEach(project => {
      if (project.name === projectName) {
        PubSub.publish('todos returned', project.getTodos());
        console.dir(project.getTodos());
      } else {
        PubSub.publish('Project not found', projectName);
        console.log('Project not found');
      }
    });
  }

  // Get todo
  const getTodo = (obj) => {
    // Iterate through projects and find if name is present then check if todo is present at index argument
    projects.forEach(project => {
      if (project.name === obj.name /* && project.todos[obj.index]*/) {
        // Add current index to current todo object then publish for expandedTodo to accept
        PubSub.publish('todo returned', project.getTodo(obj.index));
        const currentTodo = project.getTodo(obj.index);
        console.log(currentTodo);
      } else {
        // PubSub.publish('todo not found', obj);
        // console.log('todo not found');
      }
    });
  }
  const testObject = {
    name: 'test',
    index: '0'
  }


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
  addProject('Default');
  const testProjectObj = {
    name: 'Default',
    todo: 
      {
        description: 'This is a test Description',
        priority: 1,
        notes: 'Here are some notes',
        complete: true
      }
    
  };
  addTodo(testProjectObj);
  // Add subscribe events from PubSub module
  // Need to listen to corresponding click events from the displayController
  // These click events need to be from the submit buttons on the forms that are generated by the displayController
  // To subscribe to an event with pubsub you need to use a subscriber function: function(msg, data){ pass callback here }

  // Add new project with name from new project name form
  // Then publish new array for allProjects.js to subscribe to
  PubSub.subscribe('new project button clicked', function(msg, data){
    addProject(data);
    console.log(getAllProjects());
    PubSub.publish('new project added', getAllProjects());
  })
  // Subscribe to view projects button click then publish all projects returned with projects array as data
  PubSub.subscribe('view projects button clicked', function(msg, data){
    console.log('all projects returned');
    PubSub.publish('all projects returned', getAllProjects())
  });
  // Return todo when clicked
  PubSub.subscribe('todo clicked', function(msg, data){
    console.log('todo returned');
    PubSub.publish('todo returned', getTodo(data));
    getAllProjects()
  });
}
