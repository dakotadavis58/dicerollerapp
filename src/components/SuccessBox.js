import React from "react";

class SuccessBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {}
  render() {
    const minToggle = this.props.minToggle;
    const successAmount = this.props.successAmount;
    return (
      <>
        <div className="success-box">
          {minToggle
            ? "Successes = " + successAmount
            : "No successes calculated."}
        </div>
      </>
    );
  }
}

export default SuccessBox;
