import { useState } from 'react';
import { Board } from './Board';

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0); // menyimpan data ada di step keberapa saat ini

  const currentSquares = history[currentMove]; // mengambil array terakhir di array history

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0); // genap = X, ganjil = O, kalo kondisinya true maka X, kalo kondisinya false maka O
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // mendapatkan data history jump to kemudian ditambahkan dengan next squares
    setHistory(nextHistory); // input keadaan board saat ini ke array history
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  const moves = history.map((squares, move) => {
    let description = '';
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
