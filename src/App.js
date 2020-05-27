import React from "react";
import Home from "./Component/TodoApp";
import {About,Contact} from "./Component/About/About";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
/* export default () => <TodoApp />; */

export default () => {
  return (
/*     <>
      <Header></Header>
    <About></About>
     <TodoApp />

  
    </> */
        <Router>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
      </Router>
  );
};
