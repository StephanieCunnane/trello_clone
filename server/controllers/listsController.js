const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const listData = {
        boardId: req.body.boardId,
        title: req.body.list.title,
      };

      const list = await List.create(listData);
      const board = await Board.findById(list.boardId);
      board.lists.push(list._id);
      await board.save();
      res.json(list);
    } catch (error) {
      res.json({ error });
    }
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const editList = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const list = await List.findById(req.params.id);
      const title = (req.body.title || "").trim();
      const position = req.body.position;
      if (typeof title === "string" && title.length > 0) {
        list.title = title;
      }
      console.log(position);
      if (typeof position === "number" && !Number.isNaN(position)) {
        list.position = position;
      }
      await list.save();
      res.json(list);
    } catch (error) {
      res.json({ error });
    }
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.editList = editList;
exports.createList = createList;
