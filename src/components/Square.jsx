/* eslint-disable react/prop-types */
import { useState } from 'react';

export const Square = ({ value, onSquareClick }) => {
  //   const [value, setValue] = useState('');

  //   const handleClick = () => {
  //     setValue('X');
  //   };

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
