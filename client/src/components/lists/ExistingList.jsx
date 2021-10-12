/*

ON CLICK -> allow edit name
<div>
  <p onClick={() => setIsEditing(true)}></p>, swapped to <input/>
</div>

ON CHANGE -> .... (controlled component)

determine if Enter was pressed:
    listen for onKeyUp, 

ON ENTER OR ON BLURRING:
  - send the updated title to backend
  - if success -> update the title in the frontend (redux store)
  - if not success -> we leave the title as is
  - () => setIsEditing(false) (hide the input, show the p)
  */

import { useState } from "react";
import { useDispatch } from "react-redux";
import ExistingCards from "./cards/ExistingCards";
import * as actions from "../../actions/ListActions";
const ExistingList = ({ _id, title, boardId, position }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [enteredText, setEnteredText] = useState("");

  const dispatch = useDispatch();

  const handleNewTitle = () => {
    // CONTINUE FROM HERE
    // it's sending a request to the backend but it's not being updated.
    // Probably the title is not included in the object and we are sending undefined (or something like that)
    dispatch(actions.editListTitle({ _id, title: enteredText }));
    setIsEditingTitle(false);
    setEnteredText("");
  };
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {!isEditingTitle ? (
              <p
                className="list-title"
                onClick={() => {
                  setIsEditingTitle(true);
                  setEnteredText(title);
                }}
              >
                {" "}
                {title}{" "}
              </p>
            ) : (
              <input
                className="list-title"
                value={enteredText}
                onChange={(e) => setEnteredText(e.target.value)}
                onKeyUp={(e) => {
                  if (e.code !== "Enter") return;
                  handleNewTitle();
                }}
                onBlur={() => {
                  handleNewTitle();
                }}
              />
            )}
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <ExistingCards listId={_id} />
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingList;
