import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
});

// Actions - than an object that gets sent to the store
console.log(store.getState());

// I'd like to increment the count
store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

// I'd like to reset the count to zero
console.log(store.getState());
