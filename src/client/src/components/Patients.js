import React, { Component } from "react";
import AuthService from "./AuthService";
import withAuth from "./withAuth";
import ReactTable from "react-table";
import "react-table/react-table.css";

const Auth = new AuthService();

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.getDetail = this.getDetail.bind(this);
  }
  handleLogout() {
    Auth.logout();
    this.props.history.replace("/login");
  }

  getDetail(userId) {
    this.props.history.push({
      pathname: `/users/${userId}`,
      state: { userId: userId }
    });
  }

  componentDidMount() {
    Auth.fetch("http://localhost:5000/users").then(users => {
      this.setState({
        users: users
      });
    });
  }

  render() {
    const columns = [
      {
        Header: "List of Patients",
        accessor: "name"
      },
      {
        Header: "Profile",
        accessor: "_id",
        filterable: false,
        Cell: ({ row }) => (
          <button type="button" onClick={() => this.getDetail(row._id)}>
            View
          </button>
        )
      }
    ];
    return (
      <ReactTable
        filterable
        defaultPageSize={5}
        minRows={5}
        defaultSorted={[
          {
            id: "name",
            desc: false
          }
        ]}
        data={this.state.users}
        columns={columns}
      />
    );
  }
}

export default withAuth(Patients);
