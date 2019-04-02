import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";

const GetUsers = () => <div>This is getting users</div>;
const GetSingleUser = () => <div>This is getting single user</div>;

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/getusers" component={GetUsers} />
      <Route exact path="/getsingleuser" component={GetSingleUser} />
    </div>
  </Router>,
  document.getElementById("app")
);
