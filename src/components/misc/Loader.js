import React from 'react';

import "./scss/loader.scss"

const Loader = ({ className }) => {
  return (
    <div className={ `spinner ${ className }` }>

    </div>
  );
};

export default Loader;
