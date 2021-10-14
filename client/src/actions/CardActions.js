import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(newCard) {
  return { type: types.ADD_CARD_SUCCESS, newCard: newCard };
}

export function createCard(newCard) {
  return (dispatch) => {
    apiClient.postCard(newCard, (data) => {
      dispatch(createCardSuccess(data.card));
    });
  };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card: card };
}

export function fetchCard(id) {
  return (dispatch) => {
    apiClient.getCard(id, (data) => {
      dispatch(fetchCardSuccess(data.card));
    });
  };
}
