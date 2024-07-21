const express = require("express");

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  deleteAllFromDatabase,
  createMeeting,
} = require("./db");

const meetingsRoute = express.Router();

meetingsRoute.get("/", (req, res, next) => {
  res.status(200).send(getAllFromDatabase("meetings"));
});

meetingsRoute.get("/:id", (req, res, next) => {
  const meetingId = Number(req.params.id);
  const meeting = getFromDatabaseById("meetings", meetingId);
  if (isNaN(meetingId) || !meeting) {
    return res.status(404).send();
  }
  res.status(200).send(meeting);
});

meetingsRoute.post("/", (req, res, next) => {
  const newMeeting = createMeeting();
  if (
    newMeeting.name !== "" ||
    (typeof newMeeting.time === "string" && newMeeting.time.length > 3)
  ) {
    addToDatabase("meetings", newMeeting);
    return res.status(201).send(newMeeting);
  } else {
    return res.status(404).send();
  }
});

meetingsRoute.delete("/", (req, res) => {
  const meetings = deleteAllFromDatabase("meetings");
  res.status(204).send();
});

module.exports = meetingsRoute;
