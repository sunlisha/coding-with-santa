/** @jsx React.DOM */

var React = window.React = require('react'),
    acorn = require('acorn'),
    CodeMirror = require('codemirror'),
    SantaClaus = require("./SantaClaus"),
    mountNode = document.getElementById("app");

    require('codemirror/mode/javascript/javascript.js');

var Rudolph = React.createClass({
  getInitialState: function() {
    return {
      userInput: '//write a for loop'
    };
  },
  componentDidMount: function() {
    var myTextArea = document.getElementById("code"),
        myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
          lineNumbers: true,
          theme: "solarized dark"
        });
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  handleSubmitClick: function() {
    setTimeout(function(){ 
      var text = document.getElementById("code").value,
          ast = acorn.parse(text),
          found = SantaClaus().nice(ast, "ForStatement");

      console.log(text);
      console.log(ast);
      console.log(found);
    }, 10);
  },
  render: function() {
    return (
      <div>
        <h3>TEST</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea id="code" value={this.state.userInput}>
              {this.state.userInput}
            </textarea>
            <input onClick={this.handleSubmitClick} type="submit" value="submit"/>
          </form>
      </div>
    );
  }
});

React.render(<Rudolph />, mountNode);

