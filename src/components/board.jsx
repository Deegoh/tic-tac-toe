/* eslint-disable no-console */
import React, { useState } from 'react';

import Square from './square';
import calculateWinner from './calculateWinner';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState(true);
  const [status, setStatus] = useState('Next player: X');

  const winner = calculateWinner(squares);

  const displayWinner = () => {
    if (winner) {
      setStatus(`Winner is ${winner}`);
    } else {
      const sign = player ? 'X' : 'O';
      setStatus(`Next player: ${sign}`);
    }
  };

  const handleClick = (id, value) => {
    const newSquares = squares.slice();
    newSquares[id] = value;
    setSquares(newSquares);
    if (player) {
      setPlayer(false);
    } else {
      setPlayer(true);
    }
    displayWinner();
  };

  const renderSquare = (i) => (
    <Square
      id={i}
      sign={player ? 'X' : 'O'}
      handleClick={handleClick}
    />
  );

  return (
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
};

export default Board;
