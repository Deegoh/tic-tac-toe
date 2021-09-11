/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint no-console: ["error", { allow: ["log"] }] */
import React from 'react';

const Square = () => (
  <button
    className="square"
    onClick={() => { console.log('x'); }}
  />
);

export default Square;
