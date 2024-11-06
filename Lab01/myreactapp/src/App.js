import React, { useState } from 'react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winningLine) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winnerData = calculateWinner(newSquares);
    if (winnerData) {
      setWinningLine(winnerData.line);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return null;
  };

  const winnerData = calculateWinner(squares);
  const winner = winnerData ? winnerData.winner : null;

  return (
      <div className="app">
        <h1>Tic Tac Toe</h1>
        <GameStatus isXNext={isXNext} winner={winner} />
        <Board squares={squares} onClick={handleClick} winningLine={winningLine} />
      </div>
  );
};

export default App;
