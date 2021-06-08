import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Summary from './Summary/Summary.jsx'
import Square from './square/Square.jsx'
import { clearBoard } from '../../actions/boardAction'
import { clearPlayer } from '../../actions/playerActions.jsx'
import { clearResult } from '../../actions/resultsAction.jsx'

function Board(props) {

  const { board, clearAction } = props

  return (
    <Fragment>
      <div id="board" className="mt-4 d-flex flex-wrap">
        {
          board.map((symbol, i) => <Square key={i} index={i} symbol={symbol} />)
        }
      </div>
      <div>
        <button onClick={clearAction}> RESET </button>
      </div>     
      <Summary />

    </Fragment>
  )
}



export default connect(
  ({ board }) => ({ board }),
  dispatch => (
      { clearAction: () => { dispatch(clearBoard(), clearPlayer(), clearResult()) } }
    )
)(Board)