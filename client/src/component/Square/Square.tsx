import React, { Component } from "react";
import classes from "./Square.module.css";

interface Props {
  value: string;
  onClicks(): void;
}

class Square extends Component<Props> {
  render() {
    return (
      <button
        className={classes.squareComponent}
        onClick={() => this.props.onClicks()}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
