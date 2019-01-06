import { createStore } from "redux";

// ACTION GENERATORS
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});
const setCount = ({ count }) => ({
  type: "SET",
  count
});
const resetCount = () => ({
  type: "RESET"
});

// Reducers
// 1. Reducers are pure functions, meaning its based only on things passed to it
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET": {
      return {
        count: action.count
      };
    }
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

// stores take two things, a state object, and an action
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
  type: "RESET"
});

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 50 }));
store.dispatch(resetCount());
