const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id);
    res.json({ card });
  } catch (error) {
    next(new HttpError("Card doesn't exist, please try again", 404));
  }
};

exports.getCard = getCard;
