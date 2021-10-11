import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ExistingList from "./ExistingList";
// import { createList } from "../../actions/ListActions";
import * as actions from "../../actions/ListActions";
/*
- control component
- save onClick:
  - if titleInput.trim() is empty -> exit the function
  - post request with the title
------------
- define the apiClient to send the post request
- define the action creator (returns a thunk)
- add a case for the action in the list reducer
*/

// useEffect(() => {
//   dispatch(actions.fetchBoard(boardId));
// }, [dispatch, boardId]);

const ExistingLists = ({ boardId }) => {
  const lists = useSelector((state) => state.lists);
  const [selected, setSelected] = useState("");
  const [titleInput, setTitleInput] = useState("");

  const dispatch = useDispatch();

  const saveHandler = () => {
    if (titleInput.trim().length === 0) return;
    const newList = { boardId: boardId, list: { title: titleInput } };
    dispatch(actions.createList(newList));
    setTitleInput("");
    setSelected("");
  };

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists.map((list) => {
          return <ExistingList key={list._id} {...list} />;
        })}
      </div>
      <div id="new-list" className={`new-list ${selected}`}>
        <span onClick={() => setSelected("selected")}>Add a list...</span>
        <input
          type="text"
          placeholder="Add a list..."
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={saveHandler}
          />
          <i className="x-icon icon" onClick={() => setSelected("")}></i>
        </div>
      </div>
    </div>
  );
};

export default ExistingLists;
