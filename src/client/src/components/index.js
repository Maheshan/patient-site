import React from "react";
import ReactDOM from "react-dom";
import AuthService from "./AuthService";
import "./index.css";
import "./App.css";
import Patients from "./Patients";
import PatientDetail from "./PatientDetail";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Our Components
import Login from "./Login";
const Auth = new AuthService();

const handleLogout = props => {
  console.log(props);
  Auth.logout();
  props.history.replace("/login");
};

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <div>
            <div className="App-header">
              <button
                type="button"
                className="App-header header__button"
                onClick={() => handleLogout(matchProps)}
              >
                Logout
              </button>
              <h2>Patients</h2>
            </div>
          </div>
          <div>
            <ToastContainer />
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );
};

ReactDOM.render(
  <Router>
    <div>
      <DefaultLayout exact path="/" component={Patients} />
      <DefaultLayout exact path="/users/:userId" component={PatientDetail} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("app")
);
