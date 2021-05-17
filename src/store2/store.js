import { createStore, applyMiddleware } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "MINUS":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

const loggerMiddleware = (store) => (next) => (action) => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const thunkMiddleware = (store) => (next) => (action) =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

export const store = createStore(
  counterReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
