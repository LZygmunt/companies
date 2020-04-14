import React from 'react';

import "./scss/wrapper-corner.scss";

const WrapperCorner = ({ children, classNames, id }) => {
  let className = classNames
    ? [ "corners", ...classNames ].join( " " )
    : "corners";

  return (
    <div className={ className } id={ id }>
      { children }
    </div>
  );
};

export default WrapperCorner;
