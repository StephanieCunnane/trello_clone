const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const { validateBoard } = require("../validators/validators");
router.get("/boards", boardsController.getBoards);
router.get("/boards/:id", boardsController.getBoard);
router.post("/boards", validateBoard, boardsController.createBoard);
router.post("/lists", listsController.createList);
router.patch("/lists/:id", listsController.editList);
router.get("/cards/:id", cardsController.getCard);
router.post("/cards", cardsController.createCard);
// router.post("/comments", cardsController.createCard);
router.post("/comments", cardsController.createComment);

module.exports = router;
//cardId 615c9754b436b8201fce2e35
