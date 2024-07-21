const express = require("express");
const apiRouter = express.Router();
const minionsRoute = require("./minionsRoute");
const workRoute = require("./workRoute");
const ideasRoute = require("./ideasRoute");
const meetingsRoute = require("./meetingsRoute");

apiRouter.use("/minions", minionsRoute);
apiRouter.use("/minions", workRoute);
apiRouter.use("/ideas", ideasRoute);
apiRouter.use("/meetings", meetingsRoute);

module.exports = apiRouter;
