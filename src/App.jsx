import './App.css';
import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  // console.log(winner);

  const handleSquareClick = clickePosition => {
    if (squares[clickePosition] || winner) return;
    setSquares(currentSquares => {
      return currentSquares.map((squaresValue, position) => {
        if (position == clickePosition) {
          return isXNext ? 'X' : '0';
        }
        return squaresValue;
      });
    });
    // console.log(squares);
    setIsXNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      {/* <h2>next player is {nextPlayer}</h2> */}
      {/* <h2>{statusMessage}</h2> */}
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
