import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import PortfolioPage from "../components/PortfolioPage";

// Create 6 new files for the 6 components
// setup imports, component, default export
// Import into app router, so they can be used

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        {/*exact = true so you don't get additional matching items like /create*/}
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
