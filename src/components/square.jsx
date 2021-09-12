/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint no-console: ["error", { allow: ["log"] }] */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Square(value) {
  const [valueGrid, setValueGrid] = useState(value);

  return (
    <button
      className="square"
      onClick={() => {
        setValueGrid({ valueGrid });
        console.log({ valueGrid });
      }}
    />
  );
}

export default Square;
