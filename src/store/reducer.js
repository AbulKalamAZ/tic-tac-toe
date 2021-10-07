import { checkWinner } from "../utils/helper";

var initialState;
const sessionStorage = window.sessionStorage;

// Checking if state exists into session storage

if (sessionStorage.getItem("initialState")) {
  // Getting state
  let state = sessionStorage.getItem("initialState");

  // Parsing as JS obj
  initialState = JSON.parse(state);
} else {
  // Else initial state
  initialState = {
    history: [Array(9).fill(null)],
    stepNum: 0,
    isXNext: true,
  };
}

const reducer = (state = initialState, action) => {
  // Destructuring state and action
  const { history, stepNum, isXNext } = state;
  const { type, payload } = action;

  switch (type) {
    case "SQUARE_BUTTON_CLICKED":
      // declaring required variables

      const historicalPosition = history.slice(0, stepNum + 1);
      const currentPosition = historicalPosition[stepNum];
      const squares = [...currentPosition];

      // Check if won
      let winner = checkWinner(history[stepNum]);

      if (winner || squares[payload]) return state;

      // Occupy a square
      squares[payload] = isXNext ? "X" : "O";

      // Setting state data to session storage

      let alterState = {
        ...state,
        history: [...historicalPosition, squares],
        stepNum: [historicalPosition.length],
        isXNext: !state.isXNext,
      };

      // State stringification
      let stringyfiedState = JSON.stringify(alterState);
      sessionStorage.setItem("initialState", stringyfiedState);

      // Modifying the initial state state
      return alterState;

    case "JUMP_TO_SPECIFIC_STEP":
      return {
        ...state,
        stepNum: payload,
        isXNext: payload % 2 === 0,
      };

    default:
      return state;
  }
};

export default reducer;
