import React from "react";

class Line extends React.Component {
  calculateAngleWidth(positionArray) {
    const row = parseInt(positionArray[0] / 3) - parseInt(positionArray[2] / 3);
    const col = (positionArray[0] % 3) - (positionArray[2] % 3);
    let w = Math.sqrt(row * row + col * col) * 35;
    let angle = Math.atan(row / col);
    if (angle < 0) angle = angle + Math.PI;
    return [angle, w];
  }
  render() {
    return (
      <div
        className="line"
        style={{
          width: `${this.calculateAngleWidth(this.props.winner)[1]}px`,
          transform: `rotate(${
            this.calculateAngleWidth(this.props.winner)[0]
          }rad)`,
          transformOrigin: "left",
          left: (point => {
            let L = (point[0] % 3) * 34 + 17;
            return L + "px";
          })(this.props.winner),
          top: (point => {
            let T = parseInt(point[0] / 3) * 34 + 15;
            return T + "px";
          })(this.props.winner)
        }}
      ></div>
    );
  }
}

export default Line;