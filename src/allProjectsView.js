import PubSub from "pubsub-js";

const renderAllProjectsView = (projects) => {
  const contentDiv = document.querySelector('#content');
  while(contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const allProjectsContainer = document.createElement('div');
  allProjectsContainer.classList.toggle('all-projects-container');;

  const newProjectDiv = document.createElement('div');
  newProjectDiv.classList.toggle('new-project-div');

  const projectsHeaderDiv = document.createElement('div');
  projectsHeaderDiv.classList.toggle('projects-header-container');

  const allProjectsHeader = document.createElement('h1');
  allProjectsHeader.classList.toggle('all-projects-header');
  allProjectsHeader.appendChild(document.createTextNode('Your Projects'));

  projectsHeaderDiv.appendChild(allProjectsHeader);

  const newProjectBtn = document.createElement('button');
  newProjectBtn.id = 'new-project-btn';
  newProjectBtn.classList.toggle('btn');
  newProjectBtn.type = 'button';
  newProjectBtn.appendChild(document.createTextNode('Add Project'));

  const newProjectInput = document.createElement('input');
  newProjectInput.id = 'project-name-input';
  newProjectInput.type = 'text';
  newProjectInput.placeholder = 'Project Name';
  
  newProjectDiv.appendChild(newProjectInput);
  newProjectDiv.appendChild(newProjectBtn);
  projectsHeaderDiv.appendChild(newProjectDiv)

  const projectsDivContainer = document.createElement('div');
  projectsDivContainer.classList.toggle('projects-div-container')

  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.toggle('project-div');
    projectDiv.setAttribute('data-project-index', index);

    const projectHeader = document.createElement('h2');
    projectHeader.appendChild(document.createTextNode(project.name));

    projectDiv.appendChild(projectHeader);
    projectsDivContainer.appendChild(projectDiv);
  });

  allProjectsContainer.appendChild(projectsHeaderDiv);
  allProjectsContainer.appendChild(projectsDivContainer);
  contentDiv.appendChild(allProjectsContainer);

  PubSub.publish('all projects view rendered');

}

// Initial page load
PubSub.subscribe('first page load', function(msg, data){
  renderAllProjectsView(data);
})
// Receive projects array from todoApp publish and generate all projects view
PubSub.subscribe('all projects returned', function(msg, data){
  renderAllProjectsView(data);
});
// Re-render projects when new project is added to the todoApp projects array
PubSub.subscribe('new project added', function(msg, data){
  renderAllProjectsView(data);
});

const allProjectsTestObj = [
  {
    name: 'Test Project Name'
  },
  {
    name: 'Test Project Name'
  },
  {
    name: 'Test Project Name'
  },
]

export {renderAllProjectsView, allProjectsTestObj};