const express = require("express");
const workRoute = express.Router();

const {
  getAllFromDatabase,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

const { validateMinionById, validateWorkId } = require("./utils");

workRoute.get("/:minionId/work", validateMinionById, (req, res, next) => {
  const allWork = getAllFromDatabase("work");
  const minionWork = allWork.filter(
    (minion) => Number(minion.minionId) === Number(req.params.minionId)
  );
  res.status(200).send(minionWork);
});

workRoute.put(
  "/:minionId/work/:workId",
  validateMinionById,
  validateWorkId,
  (req, res, next) => {
    const updatedWork = updateInstanceInDatabase("work", req.body);
    res.send(updatedWork);
  }
);

workRoute.post("/:minionId/work", (req, res, next) => {
  const newWork = req.body;
  const minionId = Number(req.params.minionId);
  if (
    newWork.title === "" ||
    newWork.hours === "" ||
    newWork.minionId === "" ||
    !minionId
  ) {
    return res.status(400).send();
  }
  const response = addToDatabase("work", newWork);
  res.status(201).send(response);
});

workRoute.delete(
  "/:minionId/work/:workId",
  validateWorkId,
  (req, res, next) => {
    const response = deleteFromDatabasebyId("work", Number(req.params.workId));
    res.status(204).send();
  }
);
module.exports = workRoute;
