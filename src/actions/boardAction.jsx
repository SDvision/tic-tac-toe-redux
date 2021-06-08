import { DRAW_X, DRAW_O, CLEAR_BOARD } from '../helpers/actionTypes'

export function drawXAction(cellIndex) {
  return (dispatch) => {
    return new Promise(resolve => {
      dispatch({
        type: DRAW_X,
        cellIndex
      })
      resolve()
    })
  }
}

export function drawOAction(cellIndex) {
  return (dispatch) => {
    return new Promise(resolve => {
      dispatch({
        type: DRAW_O,
        cellIndex
      })
      resolve()
    })
  }
}

export function clearBoard() {
  return {type: CLEAR_BOARD}
}


