import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

/*
X setup the apiClient to fetch a board by id
- setup an action creator of the thunk type (it uses apiCLient)
- create reducer for lists.
  - this reducer should handle "BOARD_FETCHED"
  - extract the all the lists into a new array
  - return the new array
- create reducer for cards.$
  - this reducer should handle "BOARD_FETCHED"
  - for each list
    - extract all the cards into a new array
    - return the new array
*/

// REGULAR ACTION CREATORS
export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardSuccess(board) {
  return { type: types.BOARD_FETCHED, board };
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
export function fetchBoard() {
  return function (dispatch) {
    apiClient.getBoard((data) => dispatch(fetchBoardSuccess(data.board)));
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
