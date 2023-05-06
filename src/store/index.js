import { legacy_createStore as createStore } from "redux";

const reducerFn = (state = { counter: 10 }, action) => {
  // Synchronous Function
  // We should not mutate the original state (Always create a copy of the original state and do changes to it. The original one should remain intact)

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
