import React, {Fragment} from 'react';
import { connect } from 'react-redux'

import Square from './square/Square.jsx'

function Board(props){
    const board = props.board
    const players = props.players
    
    return (
        <Fragment>
            <div id="board" className="d-flex flex-wrap">
                {
                    board.map((symbol, i)=> <Square key={i} index={i} symbol={symbol} />)
                }
            </div>
            <div className="mt-4">
                <div className="col">
                    <p><strong>Player 1</strong>: {players.p1}</p>
                    <p><strong>Player 2</strong>: {players.p2}</p>
                    <p><strong>Current Turn</strong>: {players.turn === 'p1' ? 'Player 1' : 'Player 2'}</p>
                </div>
            </div>
        </Fragment>
    )
}
export default connect(({board, players}) => ({board, players}))(Board);