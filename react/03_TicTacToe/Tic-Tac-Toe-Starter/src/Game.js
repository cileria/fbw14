import React from 'react';
import Board from './Board.js';

class Game extends React.Component {
    render() {
      return (
        <article className="game container mt-5">
          <section className="row">
            <div className="col-sm-8 game-board">
              <Board />
            </div>
            <div className="col-sm-4 game-info">
              <p className="h2">{/* status */ }</p>
              <ul className="nav nav-pills flex-column">
                {/* TODO */}
              </ul>
            </div>
          </section>
        </article>
      );
    }
  }


  export default Game;