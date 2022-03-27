import React, { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {};

  handleClick(e) {
    this.props.onRollClick();
  }

  render() {
    return (
      <>
        <div>
          <button className="roll-button" onClick={this.handleClick}>
            Roll
          </button>
        </div>
      </>
    );
  }
}

export default Button;
