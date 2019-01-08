// Export a stateless functional component
// description, amount, createdAt

import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

// connect function intercepts the props coming from {...expense} and passes those along with dispatch
// into component it wraps
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  // console.log(id);
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);
// you need connect to get the dispatch call, try changing it to "ExpenseListItem" instead of
// connect()(ExpenseListItem) to see difference
