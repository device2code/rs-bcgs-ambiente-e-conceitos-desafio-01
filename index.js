const express = require('express');

const app = express();

app.use(express.json());

const projects = [
  {id: "1", title: "Site Agência", tasks:[]},
  {id: "2", title: "Controle Financeiro", tasks:[]},
  {id: "3", title: "Landing Page", tasks:[]},
];

let count_requests = 0;
app.use((request, response, next) => {
  count_requests++;

  console.log(`Requisições: ${count_requests}`);

  return next();
});

function checkProjectIdExists(request, response, next) {
  const { id } = request.params;

  const project = projects.find(p => p.id === id);

  if (!project) 
    return response.status(404).json({error: 'Project Not Found!'});
  
  request.project = project;
  
  return next();
}

/**
 * Show All Projects
 */
app.get('/projects', (request, response) => {
  return response.json(projects);
});

/**
 * Add A Project
 */
app.post('/projects', (request, response) => {
  const { id, title } = request.body;
  projects.push({id, title, tasks:[]});

  return response.status(201).json(projects);
});

/**
 * Update A Project
 */
app.put('/projects/:id', checkProjectIdExists,  (request, response) => {
  const { title } = request.body;

  const project = request.project;

  project.title = title;

  return response.status(200).json(projects);
});

/**
 * Delete A Project
 */
app.delete('/projects/:id', checkProjectIdExists, (request, response) => {
  const p_index = projects.findIndex(p => p.id == request.project.id);
  
  projects.splice(p_index, 1);

  return response.send();
});

/**
 * Add a Tash for a Project
 */
app.post('/projects/:id/tasks', checkProjectIdExists, (request, response) => {
  const { title } = request.body;

  const project = projects.find(p => p.id == request.project.id);

  project.tasks.push(title);

  return response.json(project);
});

app.listen(3333);
