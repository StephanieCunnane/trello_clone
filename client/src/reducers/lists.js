/*
case BOARD_FETCHED
  - add all the lists into a new array
    - lists = board.lists
    -sddsdsdsds
*/

export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED":
      const lists = action.board.lists;
      return lists;

    default:
      return state;
  }
}

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
