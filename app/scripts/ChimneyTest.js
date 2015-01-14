/** @jsx React.DOM */

var React = window.React = require('react'),
    acorn = require('acorn'),
    CodeMirror = require('codemirror'),
    SantaClaus = require("./SantaClaus");

    require('codemirror/mode/javascript/javascript.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      userInput: '//write an if statement inside of a for loop',
      santaOutput: ''
    };
  },
  componentDidMount: function() {
    var myTextArea = document.getElementById("code3"),
        myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
          lineNumbers: true,
          theme: "solarized dark"
        });
    myCodeMirror.setSize(600, 300);

  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  handleSubmitClick: function() {
    var that = this;
    setTimeout(function(){ 
      var text = document.getElementById("code3").value,
          ast = acorn.parse(text);

      var output = SantaClaus().chimney(ast, ["ForStatement","IfStatement"]);
      that.setState({
        santaOutput: output
      });

      // console.log(text);
      // console.log(ast);
    }, 10);
  },
  render: function() {
    var chimneyTestStyle = {
          "padding": "25px"
        },
        outputStyle = {
          "fontSize" : "12px"
        };
    return (
      <div style={chimneyTestStyle}>
        <p>Structure Test</p>
          <form onSubmit={this.handleSubmit}>
            <textarea id="code3" defaultValue={this.state.userInput}>
            </textarea>
            <p style={outputStyle}>{this.state.santaOutput}</p>
            <input onClick={this.handleSubmitClick} type="submit" value="SUBMIT"/>
          </form>
      </div>
    );
  }
});
