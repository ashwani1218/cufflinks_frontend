import { createStore } from "redux";
import TeamReducer from "../reducers/TeamReducer";

export default () => {
  const store = createStore(
    TeamReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
