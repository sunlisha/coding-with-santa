/** @jsx React.DOM */

var React = window.React = require('react'),
    acorn = require('acorn'),
    CodeMirror = require('codemirror'),
    SantaClaus = require("./SantaClaus");

    require('codemirror/mode/javascript/javascript.js');

module.exports = React.createClass({
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
          ast = acorn.parse(text);

      SantaClaus().nice(ast, "ForStatement");

      // console.log(text);
      // console.log(ast);
    }, 10);
  },
  render: function() {
    return (
      <div>
        <h3>White List Test</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea id="code" defaultValue={this.state.userInput}>
            </textarea>
            <input onClick={this.handleSubmitClick} type="submit" value="submit"/>
          </form>
      </div>
    );
  }
});


