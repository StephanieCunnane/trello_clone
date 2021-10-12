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

// const createBoard = (req, res, next) => {
//   const errors = validationResult(req);
//   if (errors.isEmpty()) {
//     Board.create(req.body.board)
//       .then((board) => {
//         // second arg to .find is for filtering which columns we want to see
//         Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
//           (board) => res.json({ board })
//         );
//       })
//       .catch((err) =>
//         next(new HttpError("Creating board failed, please try again", 500))
//       );
//   } else {
//     return next(new HttpError("The input field is empty.", 404));
//   }
// };

// const createList = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (errors.isEmpty()) {
//     try {
//       const listData = {
//         boardId: req.body.boardId,
//         title: req.body.list.title,
//       };

//       const list = await List.create(listData);
//       const board = await Board.findById(list.boardId);
//       board.lists.push(list._id);
//       await board.save();
//       res.json(list);
//     } catch (error) {
//       res.json({ error });
//     }
//   } else {
//     return next(new HttpError("The input field is empty.", 404));
//   }
// };

// {
//   "listId": 13,
//   "card": {
//     "title": "My new card"
//   }
// }

// const CardSchema = new Schema({
//   title: {
//     type: String,
//     required: [true, "The Card title is required"],
//   },

//   listId: {
//     type: Schema.Types.ObjectId,
//     ref: "List",
//   },
//   dueDate: Date,
//   labels: [String],
//   description: String,
//   boardId: { type: Schema.Types.ObjectId, ref: "Board" },
//   position: Number,
//   commentsCount: Number,
// });

/*
 - craft the card object
  - add listId to the key listId of the card object
  - add boardId to the key boardId of the card object
    - find the list by id
    - read boardId from the list
    - add it to the card object

    {
Example card:
  "card": {
    "labels": [
      "red",
      "blue",
      "green"
    ],
    "_id": "615c9754b436b8201fce2e35",
    "title": "card11",
    "position": 123,
    "dueDate": null,
    "archived": false,
    "completed": false,
    "description": "hi there. list 1",
    "listId": "615c9607b436b8201fce2e33",
    "boardId": "615c95a0b436b8201fce2e32",
    "commentsCount": 0
  }
}
*/

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
