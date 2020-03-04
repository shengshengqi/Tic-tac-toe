import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        strcolor={this.props.strcolor[i]}
      />
    );
  }

  render() {
    //憨憨第一次尝试
    // const items = [];
    // let t=0;
    // for(let i=0;i<3;i++){
    //   const item = [];
    //   for(let j=0;j<3;j++){
    //     item.push(this.renderSquare(t));
    //     t = t+1;
    //   }
    //   items.push(<div className="board-row">{item}</div>)
    // }

    //憨憨升级
    // const item = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9]
    // ].map(item => (
    //   <div>{item.map(col => this.renderSquare(col))}</div>
    // ));
    // return <div>{item}</div>;

    //憨憨再次升级
    return (
      <div>
        <div>
          {[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
          ].map(item => (
            <div>{item.map(col => this.renderSquare(col))}</div>
          ))}
        </div>
      </div>
    );

    //原版
    // return (
    //   <div>
    //     <div className="board-row">
    //       {this.renderSquare(0)}
    //       {this.renderSquare(1)}
    //       {this.renderSquare(2)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(3)}
    //       {this.renderSquare(4)}
    //       {this.renderSquare(5)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(6)}
    //       {this.renderSquare(7)}
    //       {this.renderSquare(8)}
    //     </div>
    //   </div>
    // );
  }
}

export default Board;