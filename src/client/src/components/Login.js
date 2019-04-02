import React, { Component } from "react";
import "./Login.css";
import AuthService from "./AuthService";

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }
  componentWillMount() {
    console.log("logged in!!!");
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="Enter your email..."
              name="email"
              type="email"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <input className="form-submit" value="SUBMIT" type="submit" />
          </form>
        </div>
      </div>
    );
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        if (res.user.role.role === "Doctor") {
          this.props.history.replace("/");
        } else {
          console.log(res);
          this.props.history.replace({
            pathname: `/users/${res.user.role._id}`,
            state: { userId: res.user._id }
          });
        }
      })
      .catch(err => {
        alert(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

export default Login;
