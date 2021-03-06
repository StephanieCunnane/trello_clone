import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function (callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function (board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getBoard(id, callback) {
    return axios
      .get(`${routes.BOARDS_INDEX_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  postList(newList, callback) {
    return axios
      .post(`${routes.CREATE_LIST_URL}`, newList)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  editList(editedList, callback) {
    return axios
      .patch(`${routes.EDIT_LIST_URL}/${editedList._id}`, {
        title: editedList.title,
        position: editedList.position,
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  postCard(newCard, callback) {
    return axios
      .post(`${routes.ADD_CARD_URL}`, newCard)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getCard(id, callback) {
    return axios
      .get(`${routes.CARDS_INDEX_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
