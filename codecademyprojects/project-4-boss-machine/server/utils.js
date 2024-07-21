const {
  getAllFromDatabase,
  getFromDatabaseById,
} = require("./db");

const validateMinionById = (req, res, next) => {
  const id = Number(req.params.minionId);
  const minion = getFromDatabaseById("minions", id);
  const allWork = getAllFromDatabase("work");
  const minionWork = allWork.filter((minion) => Number(minion.minionId) === id);
  if (
    isNaN(id) ||
    !minion ||
    allWork === undefined ||
    minionWork === undefined
  ) {
    return res.status(404).send();
  }
  next();
};

const validateWorkId = (req, res, next) => {
  const workId = Number(req.params.workId);
  const work = getFromDatabaseById("work", workId);
  if (work && work.minionId !== req.params.minionId) {
    return res.status(400).send();
  } else if (isNaN(workId) || !work) {
    return res.status(404).send();
  } else {
    next();
  }
};

const validateItemById = (req, res, next) => {
  const itemId = Number(req.params.id);
  const item = getFromDatabaseById("ideas", itemId);

  if (isNaN(itemId) || !item) {
    return res.status(404).send();
  }
  next();
};

module.exports = {
  validateMinionById,
  validateWorkId,
  validateItemById,
};
