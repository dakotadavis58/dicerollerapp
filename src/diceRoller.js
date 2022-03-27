class Die {
  constructor(max) {
    this.max = max;
  }

  get roll() {
    return Math.floor(Math.random() * this.max) + 1;
  }

  set maxRoll(value) {
    this.max = value;
  }

  rollDice(input) {
    let arr = [];
    for (let i = 0; i < input; i++) {
      arr.push(this.roll);
    }
    return arr;
  }
}

export default Die;
