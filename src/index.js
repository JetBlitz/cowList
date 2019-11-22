import React, { useState } from "react";
import ReactDOM from "react-dom";

class Input extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cowName: ''
    }
  }

  updateCowName(event) {
    this.setState({ cowName: event.target.value })
  }

  render() {
    return (
      <div id="input">
        <input
          onChange={this.updateCowName}
          id="cowName"
          placeholder="Enter a cow name"
          value={this.state.cowName}
        />
        {this.props.myprop}
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    // app
      // showcase
      // input
      // list
    return (<div>
        <h1>Hello World from CowList BoilerPlate 47</h1>
        <Input myprop={'hi'} />
    </div>);
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));