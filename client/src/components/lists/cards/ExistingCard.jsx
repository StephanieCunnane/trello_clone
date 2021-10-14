/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

const ExistingCard = ({
  _id,
  title,
  labels, //done
  position,
  archived,
  completed,
  dueDate, // RETURN TO THIS
  description, //done
  listId,
  boardId,
  commentsCount,
}) => {
  return (
    <div className="card-background">
      <Link to={`/cards/${_id}`}>
        <div className="card">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {labels.map((label) => (
              <div
                key={label}
                className={`card-label ${label} colorblindable`}
              ></div>
            ))}
            <p>{title}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent completed">
              {dueDate}
            </i>
            <i className="description-icon sm-icon"></i>
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExistingCard;
