import React from 'react';
import '../WinningLine.css';

const WinningLine = ({ line }) => {
    if (!line) return null;

    let className = '';
    if (line[0] === 0 && line[1] === 1 && line[2] === 2) className = 'horizontal top';
    if (line[0] === 3 && line[1] === 4 && line[2] === 5) className = 'horizontal middle';
    if (line[0] === 6 && line[1] === 7 && line[2] === 8) className = 'horizontal bottom';

    if (line[0] === 0 && line[1] === 3 && line[2] === 6) className = 'vertical left';
    if (line[0] === 1 && line[1] === 4 && line[2] === 7) className = 'vertical center';
    if (line[0] === 2 && line[1] === 5 && line[2] === 8) className = 'vertical right';

    if (line[0] === 0 && line[1] === 4 && line[2] === 8) className = 'diagonal left-to-right';
    if (line[0] === 2 && line[1] === 4 && line[2] === 6) className = 'diagonal right-to-left';

    return <div className={`winning-line ${className}`}></div>;
};

export default WinningLine;
