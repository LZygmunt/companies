import React from 'react';
import setClassNames from "./setClassNames";

import "./scss/loader.scss"

const Loader = ({ classNames }) => {
  const className = setClassNames( "spinner", classNames );

  return (
    <div className={ className }>

    </div>
  );
};

export default Loader;
