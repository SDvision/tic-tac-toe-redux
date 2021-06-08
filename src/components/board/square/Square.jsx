import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Cross from './cross/Cross.jsx'
import Zero from './zero/Zero.jsx'
import { drawXAction, drawOAction } from '../../../actions/boardAction.jsx';
import { toggleTurnAction } from '../../../actions/playerActions.jsx';

function Square(props) {
  const { symbol, index, draw, players, board, toggleTurn } = props

  const disabled = symbol ? 'disabled' : ''
  return (
    <Fragment>
      <div className={'cell ' + disabled} onClick={() => draw(board, players, index).then(() => { toggleTurn(); }) }>
        {symbol ? (symbol === 'X' ? <Cross /> : <Zero />) : ''}
      </div >
    </Fragment>
  )
}

const mapStateToProps = ({ board, players, result }) => ({ board, players, result })


const mapDispatchToProps = dispatch => ({
  draw: (board, players, cellIndex) => {
    if (!board[cellIndex]) {
      if (players[players.turn] === 'X') {
        return dispatch(drawXAction(cellIndex))
      } else {
        return dispatch(drawOAction(cellIndex))
      }
    }
  }
  ,
  toggleTurn: () => dispatch(toggleTurnAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)
