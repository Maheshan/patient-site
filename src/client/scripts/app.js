"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PatientsApp = function (_React$Component) {
  _inherits(PatientsApp, _React$Component);

  function PatientsApp() {
    _classCallCheck(this, PatientsApp);

    return _possibleConstructorReturn(this, (PatientsApp.__proto__ || Object.getPrototypeOf(PatientsApp)).apply(this, arguments));
  }

  _createClass(PatientsApp, [{
    key: "render",
    value: function render() {
      var title = "Patients Site";
      var subtitle = "Subtitle";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Login, null)
      );
    }
  }]);

  return PatientsApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "handleClick",
    value: function handleClick() {
      alert("test");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleClick },
          "Tester"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Login = function (_React$Component4) {
  _inherits(Login, _React$Component4);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this4 = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this4.handleLogin = _this4.handleLogin.bind(_this4);
    return _this4;
  }

  _createClass(Login, [{
    key: "handleLogin",
    value: function handleLogin(e) {
      e.preventDefault();

      var email = e.target.elements.useremail.value;
      var password = e.target.elements.userpassword.value;
      if (email && password) {
        alert(email);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleLogin },
          React.createElement("input", { type: "email", name: "useremail" }),
          React.createElement("p", null),
          React.createElement("input", { type: "password", name: "userpassword" }),
          React.createElement("p", null),
          React.createElement(
            "button",
            null,
            "Login"
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);

ReactDOM.render(React.createElement(PatientsApp, null), document.getElementById("app"));
