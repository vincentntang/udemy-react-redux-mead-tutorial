// Export a stateless functional component
// description, amount, createdAt

import React from "react";
// import { connect } from "react-redux";
// import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";

// connect function intercepts the props coming from {...expense} and passes those along with dispatch
// into component it wraps
const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // console.log(id);
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
// export default connect()(ExpenseListItem);
// you need connect to get the dispatch call, try changing it to "ExpenseListItem" instead of
// connect()(ExpenseListItem) to see difference
