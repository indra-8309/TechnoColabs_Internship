import React from "react";
import ReactDOM from "react-dom";
import Button from "./App.js";
import "./index.css"
class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [90, 150, 43] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return "rgb(" + ary.join(", ") + ")";
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  handleClick() {
    this.setState({ color: this.chooseColor() });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? "white" : "black"}>
          Your Color is {this.formatColor(this.state.color)}.
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<Random />, document.getElementById("app"));