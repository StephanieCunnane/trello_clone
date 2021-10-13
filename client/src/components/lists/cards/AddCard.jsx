import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../actions/CardActions";

// {
//   "listId": 13,
//   "card": {
//     "title": "My new card"
//   }
// }

const AddCard = ({ listId, showAddCardForm, setShowAddCardForm }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleNewCard = () => {
    const cleanedTitle = title.trim();
    if (cleanedTitle.length === 0) return;

    dispatch(actions.createCard({ listId, card: { title: cleanedTitle } }));
    setTitle("");
    setShowAddCardForm(false);
  };
  return (
    <>
      <div
        className={`add-dropdown add-bottom ${
          showAddCardForm ? "active-card" : ""
        }`}
      >
        <div className="card">
          <div className="card-info"></div>
          <textarea
            name="add-card"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={handleNewCard}>
          Add
        </a>
        <i
          className="x-icon icon"
          onClick={() => setShowAddCardForm(false)}
        ></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div
        className="add-card-toggle"
        data-position="bottom"
        onClick={() => setShowAddCardForm(true)}
      >
        Add a card...
      </div>
    </>
  );
};

export default AddCard;
