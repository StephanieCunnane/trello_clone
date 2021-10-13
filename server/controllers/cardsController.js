const Card = require("../models/card");
const List = require("../models/list");
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

const createCard = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const list = await List.findById(req.body.listId);
      const boardId = list.boardId;
      const cardData = {
        listId: req.body.listId,
        boardId,
        title: req.body.card.title,
      };
      const card = await Card.create(cardData);
      list.cards.push(card._id);
      await list.save();
      res.json({ card });
    } catch (error) {
      return next(new HttpError("The card info is not valid", 404));
    }
  }
};

exports.getCard = getCard;
exports.createCard = createCard;
