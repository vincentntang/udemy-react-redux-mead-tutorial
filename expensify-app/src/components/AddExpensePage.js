import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

// expenseForm onsubmit={expense}......
// explaination from video 107 udemy
//  All we're doing is passing a function from AddExpensePage into ExpenseForm and then calling it in ExpenseForm with the expense as an argument.
const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push("/"); // hijacks back button
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
