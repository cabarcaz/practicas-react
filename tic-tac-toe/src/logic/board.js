import { WINNER_COMBOS } from "../constans/Constans.jsx";

export const checkWinnerFrom = (boardToCheck) => {
  // Se revisan las combinaciones ganadoras.
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // Si no hay ganador
  return null;
};
