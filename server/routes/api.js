const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const { validateBoard } = require("../validators/validators");
router.get("/boards", boardsController.getBoards);
router.get("/boards/:id", boardsController.getBoard);
router.post("/boards", validateBoard, boardsController.createBoard);
router.post("/lists", boardsController.createList);
// add validateList????
module.exports = router;
