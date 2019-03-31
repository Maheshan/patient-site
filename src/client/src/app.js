class PatientsApp extends React.Component {
  render() {
    const title = "Patients Site";
    const subtitle = "Subtitle";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Login />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handleClick() {
    alert("test");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Tester</button>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(e) {
    e.preventDefault();

    let email = e.target.elements.useremail.value;
    let password = e.target.elements.userpassword.value;
    if (email && password) {
      alert(email);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input type="email" name="useremail" />
          <p />
          <input type="password" name="userpassword" />
          <p />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<PatientsApp />, document.getElementById("app"));
