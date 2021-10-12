const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, "The Card title is required"],
  },

  listId: {
    type: Schema.Types.ObjectId,
    ref: "List",
  },
  dueDate: Date,
  labels: [String],
  description: String,
  boardId: { type: Schema.Types.ObjectId, ref: "Board" },
  position: Number,
  commentsCount: Number,
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
