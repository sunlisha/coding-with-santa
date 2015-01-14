/** @jsx React.DOM */

var React = window.React = require('react'),
    NiceTest = require("./NiceTest"),
    NaughtyTest = require("./NaughtyTest"),
    ChimneyTest = require("./ChimneyTest"),
    mountNode = document.getElementById("app");

    require('codemirror/mode/javascript/javascript.js');

var Test = React.createClass({
  render: function() {
    var headerStyle = {
          "paddingTop" : "10px",
          "paddingLeft" : "25px",
          "display" : "block",
          "height" : "50px",
          "background" : "#F0F0F0",
          "border" : "1px solid #CCC",
          "width" : "100%",
          "margin" : "0px auto"
        },
        titleStyle = {
          "verticalAlign" : "10px",
          "fontWeight" : "600"
        };
    return (
      <div>
        <span style={headerStyle}>
          <img src="./../images/santa-claus-icon.png" width="40px" height="40px"/>
          <span style={titleStyle}>   Coding Santa will tell you if your code is naughty or nice.</span>
        </span>
        <NiceTest />
        <NaughtyTest />
        <ChimneyTest />
      </div>
    );
  }
});

React.render(<Test />, mountNode);