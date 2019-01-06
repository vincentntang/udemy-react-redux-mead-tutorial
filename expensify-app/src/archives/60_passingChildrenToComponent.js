// install → import → use
// import validator from 'validator';
import React from "react";
import ReactDOM from "react-dom";
// import Option from './components/Option';
import IndecisionApp from "./components/IndecisionApp";

const Layout = propz => {
  return (
    <div>
      <p>header</p>
      {propz.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
    </div>
  </Layout>,
  document.getElementById("app")
);
