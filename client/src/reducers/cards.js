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

    case types.FETCH_CARD_SUCCESS: {
      const fetchedCard = action.card;
      const cards = [...state];
      const cardIdx = cards.findIndex((card) => card._id === fetchedCard._id);

      if (cardIdx === -1) return [...cards, fetchedCard];
      cards[cardIdx] = fetchedCard;
      return cards;
    }

    default:
      return state;
  }
}
