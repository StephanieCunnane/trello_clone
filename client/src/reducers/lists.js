/*
case BOARD_FETCHED
  - add all the lists into a new array
    - lists = board.lists
    -



*/

export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED":
      const lists = action.board.lists;
      return lists.map((list) => {
        const processedList = { ...list };
        delete processedList.cards;
        return processedList;
      });

    default:
      return state;
  }
}
