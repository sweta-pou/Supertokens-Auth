import React, { Component } from "react";
import Square from "../Square/Square";
import classes from "./Board.module.css";

interface Props {
  squares: Array<string>;
  onClicked(i: number): void;
}

class Board extends Component<Props> {
  render() {
    return (
      <>
        <div className={classes.square}>
          {[...Array(9)].map((x, i) => (
            <Square
              key={i}
              value={this.props.squares![i]}
              onClicks={() => this.props.onClicked(i)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Board;
