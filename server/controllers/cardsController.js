const Card = require("../models/card");
const Comment = require("../models/comment");
const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id).populate("comments");
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
        dueDate: null,
        labels: [],
        description: "",
        position: 0,
        commentsCount: 0,
        comments: [],
        archived: false,
        completed: false,
        // actions TBC 2022
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

/*
payload: {
  "cardId": 9,
  "comment": {
    "text": "This is my comment"
  }
}

response: {
  "_id": 3,
  "text": "This is my comment",
  "cardId": 9,
  "createdAt": "2020-10-08T18:23:59.803Z",
  "updatedAt": "2020-10-08T18:23:59.803Z"
}
*/
/*
- create a new comment
- retrieve card by id
- push comment id to cards.comments
- save card
*/

// cardId doesn't exist -> return 404
// text is empty -> return 422

/*

*/

const createComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const card = await Card.findById(req.body.cardId);

      req.body.comment.text = req.body.comment.text.trim();
      if (!card._id) {
        return next(new HttpError("No card exists with that id"), 404);
      } else if (req.body.comment.text.length === 0) {
        return next(new HttpError("No card text given"), 422);
      }
      const commentData = {
        cardId: req.body.cardId,
        text: req.body.comment.text,
      };

      const comment = await Comment.create(commentData);
      card.comments.push(comment._id);

      await card.save();
      res.json({ comment });
    } catch (err) {
      next(new HttpError("Creating comment failed, please try again", 500));
    }
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.getCard = getCard;
exports.createCard = createCard;
exports.createComment = createComment;
