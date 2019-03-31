"use strict";

console.log("App.js is running!");

var template = React.createElement(
  "h1",
  null,
  "Patient site"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
