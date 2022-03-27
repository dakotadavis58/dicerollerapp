import AmountBox from "./AmountBox";
import MinimumBox from "./MinimumBox";
import SuccessBox from "./SuccessBox";
import Button from "./Button";
import React from "react";

class RightSide extends React.Component {
  constructor(props) {
    super(props);
    this.handleRoll = this.handleRoll.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleAmountChange(e) {
    this.props.onAmountChange(e);
  }
  handleSelectChange(e) {
    this.props.onSelectChange(e);
  }
  handleRoll() {
    this.props.onRoll();
  }

  // Renders the content
  render() {
    const amount = this.props.amount;
    const successAmount = this.props.successes;
    const min = this.props.min;
    return (
      <>
        <div className="right-side">
          <div className="amountBox">
            Amount of dice to roll
            <AmountBox
              amount={amount}
              onAmountChange={this.handleAmountChange}
            />
          </div>
          <div className="success-min-container">
            <MinimumBox onSelectChange={this.handleSelectChange} />
            <SuccessBox
              successAmount={successAmount}
              minToggle={min > 0 ? true : false}
            />
          </div>
          <Button onRollClick={this.handleRoll} />
        </div>
      </>
    );
  }
}

export default RightSide;
