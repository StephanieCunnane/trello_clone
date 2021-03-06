/*
THURSDAY:
- add feature to ensure that the board is displayed in the background after refresh
{
  "card": {
    "labels": [
      "red",
      "blue",
      "green"
    ],
    "_id": "615c9754b436b8201fce2e35",
    "title": "card11",
    "position": 123,
    "dueDate": null,
    "archived": false,
    "completed": false,
    "description": "hi there. list 1",
    "listId": "615c9607b436b8201fce2e33",
    "boardId": "615c95a0b436b8201fce2e32",
    "commentsCount": 0
  }
}
hook up:
  title - DONE
  labels - DONE
  due date - DONE
  description - DONE
  activity
*/
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";

const Modal = () => {
  const cardId = useParams().id;
  const cards = useSelector((state) => state.cards);
  const card = cards.filter((c) => c._id === cardId)[0] || {};
  console.log(card);
  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <i className="x-icon icon close-modal"></i>
        <header>
          <i className="card-icon icon .close-modal"></i>
          <textarea
            className="list-title"
            style={{ height: "45px" }}
            value={card.title}
          ></textarea>
          <p>
            in list <a className="link">Stuff to try (this is a list)</a>
            <i className="sub-icon sm-icon"></i>
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <li className="labels-section">
                  <h3>Labels</h3>
                  {(card.labels || []).map((colorStr) => {
                    return (
                      <div className="member-container">
                        <div
                          className={`${colorStr} label colorblindable`}
                        ></div>
                      </div>
                    );
                  })}

                  <div className="member-container">
                    <i className="plus-icon sm-icon"></i>
                  </div>
                </li>
                <li className="due-date-section">
                  <h3>Due Date</h3>
                  <div id="dueDateDisplay" className="overdue completed">
                    <input
                      id="dueDateCheckbox"
                      type="checkbox"
                      className="checkbox"
                    />
                    {card.dueDate ? card.dueDate.toString() : "No due date"}
                    <span>{card.dueDate > Date.now() ? "(past due)" : ""}</span>
                  </div>
                </li>
              </ul>
              <form className="description">
                <p>Description</p>
                <span id="description-edit" className="link">
                  Edit
                </span>
                <p className="textarea-overlay">{card.description}</p>
                <p id="description-edit-options" className="hidden">
                  You have unsaved edits on this field.
                  <span className="link">View edits</span> -
                  <span className="link">Discard</span>
                </p>
              </form>
            </li>
            <li className="comment-section">
              <h2 className="comment-icon icon">Add Comment</h2>
              <div>
                <div className="member-container">
                  <div className="card-member">TP</div>
                </div>
                <div className="comment">
                  <label>
                    <textarea
                      rows="1"
                      placeholder="Write a comment..."
                    ></textarea>
                    <div>
                      <a className="light-button card-icon sm-icon"></a>
                      <a className="light-button smiley-icon sm-icon"></a>
                      <a className="light-button email-icon sm-icon"></a>
                      <a className="light-button attachment-icon sm-icon"></a>
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="button not-implemented"
                        value="Save"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <li className="activity-section">
              <h2 className="activity-icon icon">Activity</h2>
              <ul className="horiz-list">
                <li className="not-implemented">Show Details</li>
              </ul>
              <ul className="modal-activity-list">
                {/* Map comments to show them as activites */}
                <li>
                  <div className="member-container">
                    <div className="card-member">TP</div>
                  </div>
                  <h3>Taylor Peat</h3>
                  <div className="comment static-comment">
                    <span>The activities are not functional.</span>
                  </div>
                  <small>
                    22 minutes ago - <span className="link">Edit</span> -
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea
                        rows="1"
                        value="The activities have not been implemented yet."
                      ></textarea>
                      <div>
                        <a className="light-button card-icon sm-icon"></a>
                        <a className="light-button smiley-icon sm-icon"></a>
                        <a className="light-button email-icon sm-icon"></a>
                      </div>
                      <div>
                        <p>You haven't typed anything!</p>
                        <input
                          type="submit"
                          className="button not-implemented"
                          value="Save"
                        />
                        <i className="x-icon icon"></i>
                      </div>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="member-container">
                    <div className="card-member small-size">VR</div>
                  </div>
                  <p>
                    <span className="member-name">Victor Reyes</span> changed
                    the background of this board{" "}
                    <small>yesterday at 4:53 PM</small>
                  </p>
                </li>
                <li className="activity-comment">
                  <div className="member-container">
                    <div className="card-member">VR</div>
                  </div>
                  <h3>Victor Reyes</h3>
                  <div className="comment static-comment">
                    <span>Example of a comment.</span>
                  </div>
                  <small>
                    22 minutes ago - <span className="link">Edit</span> -
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea
                        rows="1"
                        value="Example of a comment."
                      ></textarea>
                      <div>
                        <a className="light-button card-icon sm-icon"></a>
                        <a className="light-button smiley-icon sm-icon"></a>
                        <a className="light-button email-icon sm-icon"></a>
                      </div>
                      <div>
                        <p>You haven't typed anything!</p>
                        <input
                          type="submit"
                          className="button not-implemented"
                          value="Save"
                        />
                        <i className="x-icon icon"></i>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <aside className="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li className="member-button">
              <i className="person-icon sm-icon"></i>Members
            </li>
            <li className="label-button">
              <i className="label-icon sm-icon"></i>Labels
            </li>
            <li className="checklist-button">
              <i className="checklist-icon sm-icon"></i>Checklist
            </li>
            <li className="date-button not-implemented">
              <i className="clock-icon sm-icon"></i>Due Date
            </li>
            <li className="attachment-button not-implemented">
              <i className="attachment-icon sm-icon"></i>Attachment
            </li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li className="move-button">
              <i className="forward-icon sm-icon"></i>Move
            </li>
            <li className="copy-button">
              <i className="card-icon sm-icon"></i>Copy
            </li>
            <li className="subscribe-button">
              <i className="sub-icon sm-icon"></i>Subscribe
              <i className="check-icon sm-icon"></i>
            </li>
            <hr />
            <li className="archive-button">
              <i className="file-icon sm-icon"></i>Archive
            </li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Modal;
