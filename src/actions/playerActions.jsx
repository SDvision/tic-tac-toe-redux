import { PLAYER_X, TURN, PLAYER_O, CLEAR_PLAYER } from '../helpers/actionTypes'

export function selectXPlayerAction(player) {
  return {
    type: PLAYER_X,
    player
  }
}

export function selectOPlayerAction(player) {
  return {
    type: PLAYER_O,
    player
  }
}

export function toggleTurnAction() {
  return {
    type: TURN
  }
}
export function clearPlayer() {
  return {type: CLEAR_PLAYER}
}