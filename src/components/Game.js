import React from "react";
import Board from "./Board";
import Line from "./Line";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          point: null
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      flag: false
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          point: i
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, index) => {
      const desc = index
        ? "Go to move #" +
          index +
          "(" +
          (step.point % 3) +
          "," +
          parseInt(step.point / 3) +
          ")"
        : "Go to game start";
      return (
        <li key={index}>
          <button className="history" onClick={() => this.jumpTo(index)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    let color = Array(9).fill("#000");
    if (winner) {
      status = "Winner: " + winner[0];
      const c = winner[1].map((index)=>{
        color[index] = "rgb(238, 209, 82)";
        return true;
      });
      if(c) console.log(color);
    } else {
      if(this.state.stepNumber===9){
        status = "dogfall";
      }else{
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
    }
    
    return (
      <div className="game">
        <div className="game-board">
          {winner && <Line winner={winner[1]}/>}
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            strcolor={color}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          {this.state.flag ? (
            <ol reversed>{moves.reverse()}</ol>
          ) : (
            <ol>{moves}</ol>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({flag: !this.state.flag});
            }}
          >
            reverse
          </button>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}

export default Game;