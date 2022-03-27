import "./App.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import React from "react";
import Die from "./diceRoller";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleRoll = this.handleRoll.bind(this);
  }

  state = {
    amount: 0,
    min: 0,
    arr: [],
    successes: 0,
    die: new Die(6),
    sortedArray: [],
  };

  // handle select min change
  handleSelectChange(e) {
    // this.setState({ min: e });
    this.setState({ min: e });
  }

  // handles when amount is changed in amountbox
  handleAmountChange(e) {
    let input = e;
    if (input < 0) {
      input = 0;
    } else if (input > 1000000) {
      alert("Why are you trying to roll over 1,000,000 dice? Chill dude");
      input = 0;
    }
    this.setState({ amount: input });
  }

  // handles when roll button is clicked, sets the state of the roll list and the amount of successes
  handleRoll() {
    let rollNum = this.state.amount;
    let array = this.state.die.rollDice(rollNum).sort((a, b) => a - b);
    let sortedArray = this.createAmountsPerRollArray(array);
    let successes = this.checkSuccesses(array);
    this.setState({ sortedArray: sortedArray });
    this.setState({ arr: array });
    this.setState({ successes: successes });
  }

  // checks how many rolls were above the min
  checkSuccesses(array) {
    const min = this.state.min;
    let success = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] >= min) success++;
    }
    return success;
  }

  createAmountsPerRollArray(array) {
    let sortedArray = new Array(this.state.die.max);
    let sortedIndex = 0;
    let rollNum = 1;

    sortedArray.fill(0);
    for (let i = 0; i < array.length; i++) {
      if (array[i] > rollNum) {
        rollNum = array[i];
        sortedIndex = rollNum - 1;
      }
      if (array[i] === rollNum) {
        sortedArray[sortedIndex] += 1;
      }
      if (array[i + 1] > rollNum) {
        rollNum++;
        sortedIndex++;
      }
    }
    return sortedArray;
  }

  render() {
    const amount = this.state.amount;
    const min = this.state.min;
    const arr = this.state.arr;
    const successes = this.state.successes;
    const sortedArray = this.state.sortedArray;
    return (
      <>
        <div className="main-container">
          <LeftSide sortedArray={sortedArray} />
          <RightSide
            onSelectChange={this.handleSelectChange}
            onRoll={this.handleRoll}
            onAmountChange={this.handleAmountChange}
            min={min}
            successes={successes}
            arr={arr}
            amount={amount}
          />
        </div>
      </>
    );
  }
}

export default App;
