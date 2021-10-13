/*
The component `Board` that will be rendered in response to that route will be 
responsible for parsing the URL for the id, sending a request to `/api/boards/:id`, 
dispatching an action to the store and render the board.
*/

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as actions from "../../actions/BoardActions";

import ExistingLists from "../lists/ExistingLists";

function Board() {
  // const boardId = useParams().id; DELETE
  // const boardId = useParams().id;
  /*
    0) fetch all cards from redux store (useSelector)
  */
  const id = useParams().id;
  const cards = useSelector((state) => state.cards);
  const location = useLocation();
  const path = location.pathname.match(/\/[a-z]+/, "i")[0];
  let boardId;
  if (path === "/boards") {
    boardId = id;
  } else if (path === "/cards") {
    const cardId = id;
    const card = cards.find((card) => card._id === cardId);
    if (card) {
      boardId = card.boardId;
    }
  }
  /*
  1) check if path matches /boards
    - YES -> boardId = useParams().id
    - NO -> find card given the id
      if card -> boardId = card.boardId
  */
  const dispatch = useDispatch();
  useEffect(() => {
    if (boardId) {
      dispatch(actions.fetchBoard(boardId));
    }
  }, [dispatch, boardId]);

  const boards = useSelector((state) => state.boards);
  const board = boards.filter((board) => board._id === boardId)[0];

  return (
    <>
      <header>
        <ul>
          <li id="title">{board ? board.title : ""}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <main>
        <ExistingLists boardId={boardId} />
      </main>
    </>
  );
}

export default Board;
