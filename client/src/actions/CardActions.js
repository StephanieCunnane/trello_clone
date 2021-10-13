import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(newCard) {
  return { type: types.ADD_CARD_SUCCESS, newCard: newCard };
}

export function createCard(newCard) {
  return (dispatch) => {
    apiClient.postCard(newCard, (data) => {
      console.log(data);
      dispatch(createCardSuccess(data.card));
    });
  };
}
