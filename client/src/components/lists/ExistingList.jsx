const ExistingList = ({ _id, title, boardId, position }) => {
  return (
    <div class="list-wrapper">
      <div class="list-background">
        <div class="list">
          <a class="more-icon sm-icon" href=""></a>
          <div>
            <p class="list-title">Stuff to try (this is a list)</p>
          </div>
          <div class="add-dropdown add-top">
            <div class="card"></div>
            <a class="button">Add</a>
            <i class="x-icon icon"></i>
            <div class="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-1-cards">
            <div class="card-background">
              <div class="card">
                <i class="edit-toggle edit-icon sm-icon"></i>
                <div class="card-info">
                  <div class="card-label green colorblindable"></div>
                  <div class="card-label yellow colorblindable"></div>
                  <div class="card-label red colorblindable"></div>
                  <div class="card-label orange colorblindable"></div>
                  <div class="card-label blue colorblindable"></div>
                  <div class="card-label purple colorblindable"></div>
                  <p>
                    Cards do many cool things. Click on this card to open it and
                    learn more...
                  </p>
                </div>
                <div class="card-icons">
                  <i class="clock-icon sm-icon overdue-recent completed">
                    Aug 4
                  </i>
                  <i class="description-icon sm-icon"></i>
                  <i class="comment-icon sm-icon"></i>
                </div>
              </div>
            </div>
            <div class="card-background">
              <div class="card">
                <i class="edit-toggle edit-icon sm-icon"></i>
                <div class="cover-image"></div>
                <div class="card-info">
                  <p>Another list with stuff</p>
                </div>
                <div class="card-icons">
                  <i class="clock-icon sm-icon overdue">Aug 3</i>
                  <i class="description-icon sm-icon"></i>
                </div>
              </div>
            </div>
            <div class="card-background">
              <div class="card">
                <i class="edit-toggle edit-icon sm-icon"></i>
                <div class="cover-image"></div>
                <div class="card-info">
                  <p>Use the + in the top menu to make your first board now.</p>
                </div>
                <div class="card-icons"></div>
              </div>
            </div>
          </div>
          <div class="add-dropdown add-bottom">
            <div class="card">
              <div class="card-info"></div>
              <textarea name="add-card"></textarea>
              <div class="members"></div>
            </div>
            <a class="button">Add</a>
            <i class="x-icon icon"></i>
            <div class="add-options">
              <span>...</span>
            </div>
          </div>
          <div class="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingList;
