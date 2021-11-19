import React from 'react';
import Board from './Board';
import { isDraw, calculateWinner } from '../services/helper';


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                currentSelection: null
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    resetBoard() {
        this.setState({
            history: [{
                squares: Array(9).fill(null),
                currentSelection: null
            }],
            xIsNext: true,
            stepNumber: 0,
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : '0';

        this.setState({
            history: history.concat([{
                squares: squares,
                currentSelection: i
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }

    jumpTo(stepNumber) {
        this.setState({
            stepNumber: stepNumber,
            xIsNext: (stepNumber % 2) === 0,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        const winnerResult = calculateWinner(current.squares);
        let status;
        if (winnerResult) {
            status = 'Winner: ' + winnerResult.winner;
        } else {
            status = isDraw(current.squares) ? "Game Drawn!" : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step, index) => {
            const desc = index ? 'Go to move #' + index : 'Go to game start';
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)} style={index === this.state.stepNumber ? { fontWeight: 'bold' } : {}}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} currentSelection={current.currentSelection} winnerIndices={winnerResult?.winningIndices} />
                </div>
                <div className="game-info">
                    <div className="status">{status}  <button className="reset" onClick={() => this.resetBoard()}>Reset</button></div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
