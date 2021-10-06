export default function cards(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED":
      const lists = action.board.lists;
      return lists.flatMap((list) => {
        return list.cards;
      });
    default:
      return state;
  }
}
