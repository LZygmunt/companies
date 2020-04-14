import React from 'react';

import "./scss/arrow.scss";

const Arrow = ({ direction, handleClick }) => {
  return (
    <p className="block" onClick={ handleClick }>
      <span className={ `arrow arrow-${ direction }` } />
    </p>
  );
};

export default Arrow;
