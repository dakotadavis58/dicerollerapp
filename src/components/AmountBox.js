import React from "react";
class AmountBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAmountChange(e.target.value);
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const amount = this.props.amount;
    return (
      <div className="amountbox">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="num">
            <input
              type="number"
              id="num"
              name="num"
              value={amount}
              onChange={this.handleChange}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default AmountBox;
