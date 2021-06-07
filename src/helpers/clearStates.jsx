export function clearStates() {
    const initialBoard = [
        null, null, null,
        null, null, null,
        null, null, null,
      ]
    
    const initialPlayer = {
    p1: 'X',
    p2: 'O',
    turn: 'p1'
    }

    const initialState = {
        win: null,
        tie: false
    }
    const initalState = {initialBoard, initialPlayer, initialState}
    return initialState;
}