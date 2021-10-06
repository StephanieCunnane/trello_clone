# Module responsabilities

## actions

- define the actions (normal and thunk type)
- thunk type actions access the frontend API

## assets

- static files

## constants

- action types
- api routes (the path)

## components

- Application
  - TopNav
  * BoardsDashboardContainer
    - BoardsDashboard
      - [BoardTile]
      - CreateBoardTile
    * Popover

## hooks

### useInput.js

- control input

## lib

### ApiClient.js

- Enable communication with backend

### Store.js

- Setup redux store and redux thunk
