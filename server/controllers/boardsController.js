const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt").then((boards) => {
    res.json({
      boards,
    });
  });
};
// findById

const getBoard = (req, res, next) => {
  Board.findById(req.params.id)
    .populate({
      path: "lists",
      populate: { path: "cards" },
    })
    .then((board) => {
      res.json({ board });
    })
    .catch((err) => {
      next(new HttpError("Board doesn't exist, please try again", 404));
    });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        // second arg to .find is for filtering which columns we want to see
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

// const ListSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "The List title is required"],
//     },

//     boardId: {
//       type: Schema.Types.ObjectId,
//       ref: "Board",
//     },
//     position: Number,
//     cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
//   },
//   { timestamps: true }
// );

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const list = { boardId: req.body.boardId, title: req.body.list.title };
    List.create(list).then((list) => {
      console.log("continue from here");
    });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;
