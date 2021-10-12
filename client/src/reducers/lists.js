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

    case types.EDIT_LIST_SUCCESS: {
      const processedList = { ...action.editedList };
      delete processedList.cards;
      return state.map((list) => {
        if (list._id === processedList._id) {
          return processedList;
        } else {
          return list;
        }
      });
    }
    default:
      return state;
  }
}
