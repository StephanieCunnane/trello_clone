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
