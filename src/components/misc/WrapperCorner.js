import React from 'react';
import setClassNames from "./setClassNames";

import "./scss/wrapper-corner.scss";

const WrapperCorner = ({ children, classNames, id }) => {
  const className = setClassNames( "corners", classNames );

  return (
    <div className={ className } id={ id }>
      { children }
    </div>
  );
};

export default WrapperCorner;
