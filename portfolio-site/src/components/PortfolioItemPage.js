import React from "react";

const PortfolioItemPage = props => {
  return (
    <div>
      <h1>A Thing I've done</h1>
      <p>This page is for the item with the id {props.match.params.id}</p>
    </div>
  );
};
export default PortfolioItemPage;
