import React, { Component } from "react";
import AuthService from "./AuthService";
import withAuth from "./withAuth";
import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import { ToastContainer, toast } from "react-toastify";

const Auth = new AuthService();
const required = value => (value ? undefined : "Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

class PatientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      success: false,
      viewerrole: props.user.role
    };
  }

  notify() {
    toast("User saved successfully!");
  }

  onSubmit() {}

  componentDidMount() {
    console.log(this.props);
    Auth.fetch(
      `http://localhost:5000/users/${this.props.history.location.state.userId}`
    ).then(user => {
      this.setState({
        user: user
      });
    });
  }

  render() {
    var button =
      this.state.viewerrole === "Doctor" ? (
        <div />
      ) : (
        <div className="buttons">
          <button type="submit">Submit</button>
        </div>
      );
    var form = (
      <Styles>
        <Form
          onSubmit={this.onSubmit}
          initialValues={this.state.user}
          render={({ handleSubmit, values }) => {
            return (
              <form
                onSubmit={e => {
                  e.preventDefault();

                  let data = {
                    address: values.address,
                    age: values.age,
                    email: values.email,
                    firstname: values.firstname,
                    lastname: values.lastname,
                    phone: values.phone
                  };
                  console.log(data);
                  Auth.fetch("http://localhost:5000/users/me", {
                    method: "PATCH",
                    body: JSON.stringify(data)
                  }).then(this.notify);
                }}
              >
                <div>
                  <label>First Name</label>
                  <Field
                    validate={required}
                    name="firstname"
                    component="input"
                    placeholder="First Name"
                  >
                    {({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          placeholder="First Name"
                          disabled={
                            this.state.viewerrole === "Doctor" ? "disabled" : ""
                          }
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <label>Last Name</label>
                  <Field
                    validate={required}
                    name="lastname"
                    component="input"
                    placeholder="Last Name"
                  >
                    {({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          placeholder="Last Name"
                          disabled={
                            this.state.viewerrole === "Doctor" ? "disabled" : ""
                          }
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <label>Age</label>
                  <Field
                    validate={composeValidators(
                      required,
                      mustBeNumber,
                      minValue(0)
                    )}
                    name="age"
                    component="input"
                    placeholder="Age"
                  >
                    {({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          placeholder="Patient age"
                          disabled={
                            this.state.viewerrole === "Doctor" ? "disabled" : ""
                          }
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <label>Email</label>
                  <Field
                    validate={required}
                    name="email"
                    component="input"
                    placeholder="Email"
                    disabled={
                      this.state.viewerrole === "Doctor" ? "disabled" : ""
                    }
                  >
                    {({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          placeholder="Patient email"
                          disabled={
                            this.state.viewerrole === "Doctor" ? "disabled" : ""
                          }
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <label>Address</label>
                  <Field
                    validate={required}
                    name="address"
                    component="input"
                    placeholder="Patient address"
                  >
                    {({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          placeholder="Patient address"
                          disabled={
                            this.state.viewerrole === "Doctor" ? "disabled" : ""
                          }
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <label>Phone</label>
                  <Field
                    validate={required}
                    name="phone"
                    component="input"
                    placeholder="Patient phone"
                  >
                    {({ input, meta }) => (
                      <div>
                        <input
                          {...input}
                          type="text"
                          placeholder="Patient phone"
                          disabled={
                            this.state.viewerrole === "Doctor" ? "disabled" : ""
                          }
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                {button}
              </form>
            );
          }}
        />
      </Styles>
    );

    return this.state.user ? (
      <div>
        <div>{form}</div>
      </div>
    ) : (
      <span>Loading patient details...</span>
    );
  }
}

export default withAuth(PatientDetail);
