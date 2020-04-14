import React from 'react';
import WrapperCorner from "./WrapperCorner";

import "./scss/input.scss";

const Input = ({
  id,
  name,
  type,
  label
}) => {
  const [ focused, setFocused ] = React.useState( false );
  
  const changeFocus = evt => {
    let { type, target } = evt;
    if ( target.value.length !== 0 ) setFocused( true );
    else if ( type === "focus" ) setFocused( true );
    else if ( type === "blur" ) setFocused( false );
  };

  return (
    <WrapperCorner classNames={[ "input" ]}>
      <label htmlFor={ name } className={ focused ? "focused" : "" }>
        { label }:
      </label>
      <input
        id={ id }
        type={ type }
        name={ name }
        onChange={ changeFocus }
        onFocus={ changeFocus }
        onBlur={ changeFocus }
      />
    </WrapperCorner>
  );
};

export default Input;
