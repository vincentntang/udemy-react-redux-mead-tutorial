import { createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  return state;
});

// this.setState((state = { count: 10 }) => {
//   return prevState;
// });

console.log(store.getState());

// console.log("101");
