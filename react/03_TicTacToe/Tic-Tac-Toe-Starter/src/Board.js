import React from 'react';
import Square from './Square.js';

class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      console.log(" this indide class Board ");
      console.log(this);
      let status = `Next player: ${this.props.state} {this.state.inside}` ;
  
      return (
        <React.Fragment>
          <div className="status h2 text-center">{status}</div>
          <div className="board">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
          </div>
        </React.Fragment>
      );
    }
  }

export default Board;