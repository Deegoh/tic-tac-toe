/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function Square({
  id, handleClick, sign,
}) {
  const [valueGrid, setValueGrid] = useState('');

  const updateData = () => {
    setValueGrid(sign);
  };

  return (
    <button
      className="square"
      onClick={() => {
        handleClick(id, sign);
        updateData();
      }}
    >
      {valueGrid}
    </button>
  );
}

export default Square;
