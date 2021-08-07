import { render, screen } from "@testing-library/react";
import App from "./App";
import Game from "./component/Game/Game";
import Board from "./component/Board/Board";
import Square from "./component/Square/Square";
import renderer from "react-test-renderer";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders App correctly", () => {
  const tree = renderer.create(<App version={"0.1.0 + 1"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Game correctly", () => {
  const tree = renderer.create(<Game />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Board correctly", () => {
  const tree = renderer
    .create(
      <Board squares={["X", "O", null, null, "X", null, null, null, null]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Square correctly", () => {
  const tree = renderer
    .create(<Square value={["X", "X", "O", "O", "X", "X", "O", "X", "O"]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
