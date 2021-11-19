import { DIRECTION } from '../config'

export function isDraw(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
    }
    return true;
}

export function calculateWinner(squares) {
    const lines = [
        {
            indices: [0, 1, 2],
            direction: DIRECTION.HORIZONTAL
        },
        {
            indices: [3, 4, 5],
            direction: DIRECTION.HORIZONTAL
        },
        {
            indices: [6, 7, 8],
            direction: DIRECTION.HORIZONTAL
        },
        {
            indices: [0, 3, 6],
            direction: DIRECTION.VERTICAL
        },
        {
            indices: [1, 4, 7],
            direction: DIRECTION.VERTICAL
        },
        {
            indices: [2, 5, 8],
            direction: DIRECTION.VERTICAL
        },
        {
            indices: [0, 4, 8],
            direction: DIRECTION.LEFT_45
        },
        {
            indices: [2, 4, 6],
            direction: DIRECTION.RIGHT_45
        },
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i].indices;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winningIndices: lines[i], winner: squares[a] };
        }
    }
    return null;
}