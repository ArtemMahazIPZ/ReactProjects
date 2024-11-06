import React from 'react';
import Square from './Square';
import WinningLine from './WinningLine';

const Board = ({ squares, onClick, winningLine }) => {
    const renderSquare = (index) => (
        <Square
            value={squares[index]}
            onClick={() => onClick(index)}
            highlight={winningLine && winningLine.includes(index)}
        />
    );

    return (
        <div className="board">
            {[...Array(9)].map((_, i) => renderSquare(i))}
            <WinningLine line={winningLine} />
        </div>
    );
};

export default Board;

