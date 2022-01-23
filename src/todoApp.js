import PubSub from "pubsub-js";
import createTodo from "./createTodo";
import createProject from "./createProject";

export const todoApp = () => {
  let projects;
  // Retrieve projects strings from localStorage and convert them to objects
  if (window.localStorage.getItem('localProjects')) {
    projects = JSON.parse(window.localStorage.getItem('localProjects'));
    // Convert the object literals back into project objects
    for (let i = 0; i < projects.length; i++) {
      projects[i] = createProject(projects[i].name, projects[i].todos);
    }
  } else {
    projects = [];
  }

  // Store projects with todos in localStorage
  const storeProjects = () => {
    for (let i = 0; i < projects.length; i++) {
      projects[i].todos = projects[i].getTodos();
    }
    window.localStorage.setItem('localProjects', JSON.stringify(projects));
  }

  // Create project objects with empty todos array property
  const addProject = (projectName) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name === projectName) {
        console.log('Project name already used');
        PubSub.publish('Project name already in use', projectName);
        break;
      }
    }
    projects.push(createProject(projectName));
    storeProjects();
    console.log(`${projectName} added!`);
    PubSub.publish('project added', projects);
  }

  // Add todo by searching projects list and pushing todo argument to todos property
  const addTodo = (obj) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name === obj.project) {
        projects[i].addTodo(obj);
        storeProjects();
        PubSub.publish('todo added', projects[i]);
        console.dir(projects[i]);
        break;
      } else {
        console.log('project not found');
      }
    }
    // projects.forEach(project => {
    //   if (project.name === obj.project) {
    //     project.addTodo(obj);
    //     window.localStorage.setItem('localProjects', JSON.stringify(projects));
    //     PubSub.publish('todo added', project);
    //     console.dir(project);
    //   }
    // });

  }

  // Get project
  const getProject = (index) => {
    PubSub.publish('project returned', projects[index]);
    console.log(projects[index]);
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
    console.log(obj);
    console.log(projects);
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name === obj.name) {
        console.log(projects[i].getTodo(obj.index));
        let currentTodo = projects[i].getTodo(obj.index);
        currentTodo.index = obj.index;
        return currentTodo;
      } 
    }
    return 'project not found';
  }

  // Update todo
  const updateTodo = (obj) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name === obj.todo.project) {
        projects[i].updateTodo(obj.index, obj.todo);
        storeProjects();
        PubSub.publish('todo updated', projects[i]);
        console.log(projects[i]);
        break;
      } else {
        console.log('todo not found');
        return 'todo not found.';
      }
    }
    // projects.forEach(project => {
    //   if (project.name === obj.todo.project) {
    //     project.updateTodo(obj.index, obj.todo);
    //     window.localStorage.setItem('localProjects', JSON.stringify(projects));
    //     PubSub.publish('todo updated', project);
    //     console.log(project);
    //   } else {
    //     console.log('todo not found');
    //     PubSub.publish('todo not found', project);
    //   }
    // });
  }
  // Update Project

  // Delete Project
  const deleteProject = (projectName) => {
    projects.forEach((project, index) => {
      if (project.name === projectName) {
        projects.splice(index, 1);
  
        storeProjects();
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
      if (project.name === obj.name) {
        console.log(`${project.getTodo(obj.index)} deleted`);
        project.deleteTodo(obj.index);
  
        storeProjects();
        PubSub.publish('todo deleted', project)
      } 
    });
    PubSub.publish('todo not found', obj);
    console.log('todo not found');
  }

  // Add subscribe events from PubSub module
  // Need to listen to corresponding click events from the displayController
  // These click events need to be from the submit buttons on the forms that are generated by the displayController
  // To subscribe to an event with pubsub you need to use a subscriber function: function(msg, data){ pass callback here }

  // Display all projects view on first page load
  PubSub.subscribe('initial page load', function (msg, data) {
    console.log('first page load');
    PubSub.publish('first page load', getAllProjects());
  })
  // Add new project with name from new project name form
  // Then publish new array for allProjects.js to subscribe to
  PubSub.subscribe('new project button clicked', function (msg, data) {
    addProject(data);
    console.log(getAllProjects());
    PubSub.publish('new project added', getAllProjects());
  })
  // Subscribe to view projects button click then publish all projects returned with projects array as data
  PubSub.subscribe('view projects button clicked', function (msg, data) {
    console.log('all projects returned');
    PubSub.publish('all projects returned', getAllProjects())
  });
  // Add new todo
  PubSub.subscribe('new todo submitted', function (msg, data) {
    addTodo(data);
    // PubSub.publish('new todo added', getAllTodos());
  });
  // Return todo when clicked
  PubSub.subscribe('todo clicked', function (msg, data) {
    console.log('todo returned');
    PubSub.publish('todo returned', getTodo(data));
  });
  // Also return todo when edit btn clicked
  PubSub.subscribe('todo edit button clicked', function (msg, data) {
    console.log(data);
    PubSub.publish('edit todo returned', getTodo(data));
  });
  PubSub.subscribe('edit todo submitted', function (msg, data) {
    updateTodo(data);
    // PubSub.publish('todo updated')
  });
  // Return project data when project clicked
  PubSub.subscribe('project clicked', function (msg, data) {
    getProject(data);
  });
  // Delete todo when delete button clicked
  PubSub.subscribe('todo delete button clicked', function (msg, data) {
    deleteTodo(data);
    console.log('delete received in todoApp');
  });
}
