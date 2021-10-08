/*
case BOARD_FETCHED
  - add all the lists into a new array
    - lists = board.lists
    -



*/

import * as types from "../constants/ActionTypes";

export default function lists(state = [], action) {
  switch (action.type) {
    case types.BOARD_FETCHED: {
      const lists = action.board.lists;
      return lists.map((list) => {
        const processedList = { ...list };
        delete processedList.cards;
        return processedList;
      });
    }
    case types.CREATE_LIST_SUCCESS: {
      return [...state, action.newList];
    }
    default:
      return state;
  }
}
