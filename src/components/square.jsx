/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function Square(value) {
  const [valueGrid, setValueGrid] = useState('');

  const handleClick = () => {
    setValueGrid(value.value);
  };

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {valueGrid}
    </button>
  );
}

export default Square;
