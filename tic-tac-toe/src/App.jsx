import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constans/Constans.jsx";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal.jsx";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate, si no hay más espacios vacíos en el tablero.
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    // No actualizamos la posición si ya tiene algo o si ya ganó alguien.
    if (board[index] || winner) return;

    // Actualizar rl tablero.
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisar si hay ganador.
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // Actualiza el estado.
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
