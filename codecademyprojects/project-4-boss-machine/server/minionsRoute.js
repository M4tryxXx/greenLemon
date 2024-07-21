const express = require("express");
const minionsRoute = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

const { validateMinionById } = require("./utils");

minionsRoute.get("/", (req, res, next) => {
  res.status(200).send(getAllFromDatabase("minions"));
});

minionsRoute.get("/:minionId", validateMinionById, (req, res, next) => {
  res
    .status(200)
    .send(getFromDatabaseById("minions", Number(req.params.minionId)));
});

minionsRoute.put("/:minionId", validateMinionById, (req, res, next) => {
  const minion = updateInstanceInDatabase("minions", req.body);
  res.send(minion);
});

minionsRoute.post("/", (req, res, next) => {
  const minion = req.body;
  if (minion.name !== "") {
    const response = addToDatabase("minions", minion);
    return res.status(201).send(response);
  } else {
    return res.status(400).send("Please fill in all forms!");
  }
});

minionsRoute.delete("/:minionId", validateMinionById, (req, res, next) => {
  deleteFromDatabasebyId("minions", Number(req.params.minionId));
  res.status(204).send().redirect("/");
});

module.exports = minionsRoute;
