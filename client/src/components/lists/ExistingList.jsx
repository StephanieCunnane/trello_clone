/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";
import { useDispatch } from "react-redux";
import ExistingCards from "./cards/ExistingCards";
import * as actions from "../../actions/ListActions";
import AddCard from "./cards/AddCard";
const ExistingList = ({ _id, title, boardId, position }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [showAddCardForm, setShowAddCardForm] = useState(false);

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
          <AddCard
            listId={_id}
            showAddCardForm={showAddCardForm}
            setShowAddCardForm={setShowAddCardForm}
          />
        </div>
      </div>
    </div>
  );
};

export default ExistingList;
