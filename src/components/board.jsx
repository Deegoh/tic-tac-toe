import React from 'react';
import Square from './square';

const status = 'Next player: X';

const renderSquare = (i) => (
  <Square value={i} />
);

const Board = () => (
  <div>
    <div className="status">{status}</div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>

);

export default Board;
