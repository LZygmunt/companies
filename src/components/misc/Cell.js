import React from 'react';
import setClassNames from "./setClassNames";

import "./scss/cell.scss";

const Cell = ({ children, value, classNames }) => {
  const className = setClassNames( "cell", classNames );

  return (
    <p className={ className }>
      { value }
      { children }
    </p>
  );
};

export default Cell;
