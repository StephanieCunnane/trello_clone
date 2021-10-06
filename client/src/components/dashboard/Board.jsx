/*
The component `Board` that will be rendered in response to that route will be 
responsible for parsing the URL for the id, sending a request to `/api/boards/:id`, 
dispatching an action to the store and render the board.
*/

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../actions/BoardActions";

function Board() {
  const boardId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchBoard(boardId));
  });
  return (
    <div>
      <p>hi there</p>
    </div>
  );
}

export default Board;
