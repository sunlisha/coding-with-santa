/** @jsx React.DOM */

var React = window.React = require('react'),
    acorn = require('acorn'),
    CodeMirror = require('codemirror'),
    SantaClaus = require("./SantaClaus");

    require('codemirror/mode/javascript/javascript.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      userInput: '//write a for loop',
      santaOutput: ''
    };
  },
  componentDidMount: function() {
    var myTextArea = document.getElementById("code"),
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
      var text = document.getElementById("code").value,
          ast = acorn.parse(text);

      var output = SantaClaus().nice(ast, "ForStatement");

      that.setState({
        santaOutput: output
      });
      // console.log(text);
      // console.log(ast);
    }, 10);
  },
  render: function() {
    var niceTestStyle = {
          "padding": "25px"
        },
        outputStyle = {
          "fontSize" : "12px"
        };
    return (
      <div style={niceTestStyle}>
        <p>White List Test</p>
          <form onSubmit={this.handleSubmit}>
            <textarea id="code" defaultValue={this.state.userInput}>
            </textarea>
            <p style={outputStyle}>{this.state.santaOutput}</p>
            <input onClick={this.handleSubmitClick} type="submit" value="SUBMIT"/>
          </form>
      </div>
    );
  }
});


