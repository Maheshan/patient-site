import React, { Component } from "react";
import AuthService from "./AuthService";
import withAuth from "./withAuth";

const Auth = new AuthService();

class PatientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    Auth.fetch(
      `http://localhost:5000/users/${this.props.history.location.state.userId}`
    ).then(user => {
      this.setState({
        name: user.name
      });
    });
  }

  render() {
    return <p>{this.state.name}</p>;
  }
}

export default withAuth(PatientDetail);
