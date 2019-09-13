import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.js';
import Board from './Board.js';
import Game from './Game.js'
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

// ==========================
// Components
// ==========================

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <React.Fragment>
//         <div className="status h2 text-center">{status}</div>
//         <div className="board">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//         </div>
//       </React.Fragment>
//     );
//   }
// }






// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }



// class Game extends React.Component {
//   render() {
//     return (
//       <article className="game container mt-5">
//         <section className="row">
//           <div className="col-sm-8 game-board">
//             <Board />
//           </div>
//           <div className="col-sm-4 game-info">
//             <p className="h2">{/* status */ }</p>
//             <ul className="nav nav-pills flex-column">
//               {/* TODO */}
//             </ul>
//           </div>
//         </section>
//       </article>
//     );
//   }
// }
// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Square />, document.getElementById('root'));
ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
