const express = require("express");

const server = express();

server.use(express.json());

const projects = [];

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  const project = projects.find(project => project.id == id);
  return res.json(project);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);
  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  const { title } = req.body;
  const project = project.find(project => project.id == req.params.id);

  project.title = req.body.title;

  return res.json(projects);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = projects.find(project => project.id == req.params.id);

  projects.splice(project, 1);

  return res.json(projects);
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(4000);
