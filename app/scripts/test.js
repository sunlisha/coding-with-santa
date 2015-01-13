/** @jsx React.DOM */

var React = window.React = require('react'),
    NiceTest = require("./NiceTest"),
    NaughtyTest = require("./NaughtyTest"),
    ChimneyTest = require("./ChimneyTest"),
    mountNode = document.getElementById("app");

    require('codemirror/mode/javascript/javascript.js');

var Test = React.createClass({
  render: function() {
    return (
      <div>
        <NiceTest />
        <NaughtyTest />
        <ChimneyTest />
      </div>
    );
  }
});

React.render(<Test />, mountNode);