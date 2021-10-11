import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(newList) {
  return { type: types.CREATE_LIST_SUCCESS, newList: newList };
}

export function createList(newList, callback) {
  return function (dispatch) {
    apiClient.postList(newList, (data) => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback(data);
      }
    });
  };
}

export function editedListSuccess(editedList) {
  return {
    type: types.EDIT_LIST_SUCCESS,
    editedList: editedList,
  }; // {_id, title}
}

export function editListTitle(editedListTitle) {
  return function (dispatch) {
    apiClient.editList(editedListTitle, (data) => {
      dispatch(editedListSuccess(data));

      // if (callback) {
      //   callback(data);
      // }
    });
  };
}
