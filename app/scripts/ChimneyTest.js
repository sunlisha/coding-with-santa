/** @jsx React.DOM */

var React = window.React = require('react'),
    acorn = require('acorn'),
    codeMirror = require('codemirror'),
    SantaClaus = require("./SantaClaus");

    require('codemirror/mode/javascript/javascript.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      userInput: '//write a for loop'
    };
  },
  componentDidMount: function() {
    var myTextArea = document.getElementById("code3"),
        mycodeMirror = codeMirror.fromTextArea(myTextArea, {
          lineNumbers: true,
          theme: "solarized dark"
        });
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  handleSubmitClick: function() {
    setTimeout(function(){ 
      var text = document.getElementById("code3").value,
          ast = acorn.parse(text);

      SantaClaus().chimney(ast, ["ForStatement"]);

      // console.log(text);
      // console.log(ast);
    }, 10);
  },
  render: function() {
    return (
      <div>
        <h3>Structure Test</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea id="code3" defaultValue={this.state.userInput}>
            </textarea>
            <input onClick={this.handleSubmitClick} type="submit" value="submit"/>
          </form>
      </div>
    );
  }
});
