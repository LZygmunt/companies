import React from 'react';

import "./scss/arrow.scss";

const Arrow = ({ direction, handleClick }) => {
  return (
    <p
      className="block"
      onClick={ handleClick }
      data-direction={ direction }
    >
      <span className={ `arrow arrow-${ direction }` } />
    </p>
  );
};

export default Arrow;
