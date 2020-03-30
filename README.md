# Desafio 1: Conceitos do NodeJS

## Objetivo

Criar uma aplicação para armazenar projetos e suas respectivas tarefas

### Rotas
`POST /projects`: Adiciona um novo projeto.  
`GET /projects`: Lista todos projetos com suas respectivas tarefas.  
`PUT /projects/:id`: Altera um projeto existente.  
`DELETE /projects/:id`: Exclui um projeto existente.  
`POST /projects/:id/tasks`: Adiciona uma tarefa ao projeto informado.  

### Middlewares
Um middleware que verifica se existe um projeto com ID informado.  
Um middleware que conta quantas requisições foram feitas durante a execução da aplicação.  
