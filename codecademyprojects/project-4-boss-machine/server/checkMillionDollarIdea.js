const checkMillionDollarIdea = (req, res, next) => {
  const { id, name, description, weeklyRevenue, numWeeks } = req.body;
  const intWeekleyRevenue = Number(weeklyRevenue);
  const intNumWeeks = Number(numWeeks);
  const oneMil = 1000000;
  const totalYeld = intWeekleyRevenue * intNumWeeks;
  if (isNaN(intWeekleyRevenue) || isNaN(intNumWeeks) || totalYeld < oneMil) {
    return res.status(400).send();
  } else if (totalYeld >= oneMil) {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
