import React from 'react';
import Square from './Sqaure';

export default class Board extends React.Component {
    renderSquare(i) {
        return <Square direction={this.props.winnerIndices?.direction} winingIndex={this.props.winnerIndices?.indices?.includes(i)} key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} hightlight={this.props.currentSelection === i} />;
    }

    render() {
        let counter = 0;
        let array = new Array(3).fill(null);
        return (
            <div>
                {
                    array.map(() => {
                        return (
                            <div className="board-row" key={counter}>
                                {
                                    array.map(() => {
                                        return this.renderSquare(counter++);
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
