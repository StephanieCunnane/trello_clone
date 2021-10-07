import { useSelector } from "react-redux";
import ExistingList from "./ExistingList";

const ExistingLists = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <div id="list-container" class="list-container">
      <div id="existing-lists" class="existing-lists">
        {lists.map((list) => {
          return <ExistingList {...list} />;
        })}
      </div>
      <div id="new-list" class="new-list">
        <span>Add a list...</span>
        <input type="text" placeholder="Add a list..." />
        <div>
          <input type="submit" class="button" value="Save" />
          <i class="x-icon icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ExistingLists;
