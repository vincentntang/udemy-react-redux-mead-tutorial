import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  console.log(props); // this shows props being passed down
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          // Dispatch the action to edit the expense
          // redirect to the dashboard
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
          console.log("updated", expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

// remove expense via dispatch and then redirect to dashboard

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditExpensePage);
