var helloMessage = React.createClass({
  render: function () {
    return <h1> Hello {this.props.message}!</h1>;
  }
});

React.render(<helloMessage message = "Noel" /> document.body);
