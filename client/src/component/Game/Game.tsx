import React, { Component } from "react";
import {
  signOut,
  redirectToAuth,
} from "supertokens-auth-react/recipe/emailpassword";
import Board from "../Board/Board";
import * as Winner from "../../winner/Winner";
import classes from "./Game.module.css";

interface IProps {}
interface IPartialStep {
  squares: Array<string>;
}
interface IState {
  history: Array<IPartialStep>;
  isXNext: Boolean;
  stepNumber: number;
}

class Game extends Component<IProps, IState, IPartialStep> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      isXNext: true,
      stepNumber: 0,
    };
  }
  clickHandler(i: number) {
    let history = this.state.history!.slice(0, this.state.stepNumber! + 1);
    let current = history[history.length - 1];
    let square = current.squares!.slice();
    if (Winner.calculateWinner(square) || square[i]) {
      return;
    }
    square[i] = this.state.isXNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: square,
        },
      ]),
      stepNumber: history.length,
      isXNext: !this.state.isXNext,
    });
  }
  jumpTo(n: number) {
    this.setState({
      stepNumber: n,
      isXNext: n % 2 === 0,
    });
  }
  Signout = async () => {
    await signOut();
    redirectToAuth();
  };
  render() {
    let history = this.state.history;
    let current = history![this.state.stepNumber!];
    let winner = Winner.calculateWinner(current.squares!);
    let status;
    if (winner) {
      status = "Winner : " + winner;
    } else {
      status = "Next player : " + (this.state.isXNext ? "X" : "O");
    }
    const moves = history!.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <>
        <button onClick={() => this.Signout()}>Sign Out</button>
        <p className={classes.status}>{status}</p>
        <Board
          squares={current.squares!}
          onClicked={(i: number) => this.clickHandler(i)}
        />
        <ol className={classes.list}>{moves}</ol>
      </>
    );
  }
}
export default Game;
