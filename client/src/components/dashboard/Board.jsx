/*
The component `Board` that will be rendered in response to that route will be 
responsible for parsing the URL for the id, sending a request to `/api/boards/:id`, 
dispatching an action to the store and render the board.
*/

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../actions/BoardActions";

import ExistingLists from "../lists/ExistingLists";

function Board() {
  const boardId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchBoard(boardId));
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
