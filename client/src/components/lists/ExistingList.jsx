/* eslint-disable react/react-in-jsx-scope */
/*


The new card form is active when the parent `.list-wrapper` has the `add-dropdown-active` class 
and the `.add-dropdown.add-bottom` element has the `active-card` class.

Since only one list should have the form active at a time, 
only one list should  have the `add-dropdown-active` class at a time.

When the user clicks Add a Card, we add the add-dropdown-active class to the list-wrapper div
AND the active-card class to the form container
  */

import { useState } from "react";
import { useDispatch } from "react-redux";
import ExistingCards from "./cards/ExistingCards";
import * as actions from "../../actions/ListActions";
const ExistingList = ({ _id, title, boardId, position }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [showAddCardForm, setshowAddCardForm] = useState(false);

  const dispatch = useDispatch();

  const handleNewTitle = () => {
    dispatch(actions.editListTitle({ _id, title: enteredText }));
    setIsEditingTitle(false);
    setEnteredText("");
  };
  return (
    <div
      className={`list-wrapper ${showAddCardForm ? "add-dropdown-active" : ""}`}
    >
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
          {/* here */}
          <div
            className={`add-dropdown add-bottom ${
              showAddCardForm ? "active-card" : ""
            }`}
          >
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i
              className="x-icon icon"
              onClick={() => setshowAddCardForm(false)}
            ></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div
            className="add-card-toggle"
            data-position="bottom"
            onClick={() => setshowAddCardForm(true)}
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingList;
