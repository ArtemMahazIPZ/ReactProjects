import React from 'react';

const GameStatus = ({ isXNext, winner }) => {
    return (
        <div className="status">
            {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
        </div>
    );
};

export default GameStatus;
