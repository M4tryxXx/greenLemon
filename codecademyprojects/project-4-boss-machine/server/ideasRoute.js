const express = require("express");
const ideasRoute = express.Router();
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

const { validateItemById } = require("./utils");

const checkMillionDollarIdea = require("./checkMillionDollarIdea");

ideasRoute.get("/", (req, res, next) => {
  res.status(200).send(getAllFromDatabase("ideas"));
});

ideasRoute.get("/:id", validateItemById, (req, res) => {
  res.status(200).send(getFromDatabaseById("ideas", Number(req.params.id)));
});

ideasRoute.put("/:id", validateItemById, (req, res, next) => {
  const newIdea = updateInstanceInDatabase("ideas", req.body);
  return res.status(200).send(newIdea);
});

ideasRoute.post("/", checkMillionDollarIdea, (req, res, next) => {
  const ideaToAdd = req.body;
  if (ideaToAdd.name !== "") {
    const newIdea = addToDatabase("ideas", ideaToAdd);
    res.status(201).send(newIdea);
  }
});

ideasRoute.delete("/:id", validateItemById, (req, res, next) => {
  deleteFromDatabasebyId("ideas", Number(req.params.id));
  res.status(204).send();
});
module.exports = ideasRoute;
