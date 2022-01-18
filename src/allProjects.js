const renderAllProjectsView = (projects) => {
  const contentDiv = document.querySelector('#content');

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
  newProjectBtn.appendChild(document.createTextNode('New Project'));

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
}

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