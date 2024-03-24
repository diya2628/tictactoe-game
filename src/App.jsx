import './App.css';
import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';
import Historyy from './components/Historyy';

function App() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false); // basics now will merge to 1 function: history

  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  console.log({ history, currentMove });
  const winner = calculateWinner(gamingBoard.squares);
  // console.log(winner);

  const isTraversing = currentMove + 1 === history.length;
  // console.log(isTraversing);

  const handleSquareClick = clickePosition => {
    if (gamingBoard.squares[clickePosition] || winner) return;
    // setSquares(currentSquares => {
    //   return currentSquares.map((squaresValue, position) => {
    //     if (position == clickePosition) {
    //       return isXNext ? 'X' : '0';
    //     }
    //     return squaresValue;
    //   });
    // });
    // console.log(squares);
    // setIsXNext(currentIsNext => !currentIsNext);

    setHistory(currentHistory => {
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squaresValue, position) => {
          if (position == clickePosition) {
            return lastGamingState.isXNext ? 'X' : '0';
          }
          return squaresValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      {/* <h2>next player is {nextPlayer}</h2> */}
      {/* <h2>{statusMessage}</h2> */}
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <h2>Current History Of Game</h2>
      <Historyy history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
