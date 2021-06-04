import React from 'react';
import "./Board.css"

import Square from './square/Square.jsx'

function Board(props){
    //TODO: do it with redux
    const board = [1,2,3,4,5,6,7,8,9]
    return (
        <div id="board" className="d-flex flex-wrap">
            {
                board.map((ele, i)=> <Square key={i} seq={ele}/>)
            }
        </div>
    )
}
export default Board;