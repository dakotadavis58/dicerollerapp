import React from "react";
class MinimumBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.onSelectChange(e.target.value);
  }

  render() {
    return (
      <>
        <div className="minimum-box">
          <form>
            <label htmlFor="min">Minimum needed to succeed: </label>
            <select id="minimum" name="min" onChange={this.handleChange}>
              <option value="0">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </form>
        </div>
      </>
    );
  }
}

export default MinimumBox;
