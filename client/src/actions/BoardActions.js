import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

// REGULAR ACTION CREATORS
export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

// THUNK TYPE ACTION CREATORS
// (they use normal action creators as helper functions)
export function fetchBoards() {
  return function (dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards((data) => dispatch(fetchBoardsSuccess(data.boards)));
  };
}

export function createBoard(board, callback) {
  return function (dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, (data) => {
      dispatch(createBoardSuccess(data.board));

      if (callback) {
        callback(data.board);
      }
    });
  };
}
