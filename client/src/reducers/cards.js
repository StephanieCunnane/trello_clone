import * as types from "../constants/ActionTypes";

export default function cards(state = [], action) {
  switch (action.type) {
    case types.BOARD_FETCHED: {
      const lists = action.board.lists;
      return lists.flatMap((list) => {
        return list.cards;
      });
    }
    case types.ADD_CARD_SUCCESS: {
      const newCard = action.newCard;
      return [...state, newCard];
    }
    default:
      return state;
  }
}
