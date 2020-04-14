import React from 'react';

import "./scss/cell.scss";

const Cell = ({ children, value, classNames }) => {
  let isSetClassNames = classNames !== null && classNames !== undefined;
  let className = isSetClassNames
    ? [ "cell", ...classNames ].join( ' ' )
    : "cell";

  return (
    <p className={ className }>
      { value }
      { children }
    </p>
  );
};

export default Cell;
