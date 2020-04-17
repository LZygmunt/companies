import React from 'react';
import WrapperCorner from "./WrapperCorner";

import "./scss/input.scss";

const Input = ({
  id,
  name,
  type,
  label,
  disabled,
  filter,
  actionType
}) => {
  const [ focused, setFocused ] = React.useState( false );

  const changeFocus = evt => {
    const { type, target } = evt;
    if ( target.value.length !== 0 ) setFocused( true );
    else if ( type === "focus" ) setFocused( true );
    else if ( type === "blur" ) setFocused( false );
  };

  const handleChange = evt => {
    const { target } = evt;

    changeFocus( evt );
    filter( actionType, target.value );
  };

  const disableNonNumeric = evt => {
    let { data, target } = evt;
    if ( target.type !== "number") return false;
    let regex = /[0-9]|\./;
    if ( !regex.test( data )) evt.preventDefault();
  };

  return (
    <WrapperCorner classNames={[ "input", disabled ? "disabled" : "" ]}>
      <label htmlFor={ name } className={ focused ? "focused" : "" }>
        { label }:
      </label>
      <input
        id={ id }
        type={ type }
        name={ name }
        min={ 0 }
        disabled={ disabled }
        onChange={ handleChange }
        onFocus={ changeFocus }
        onBlur={ changeFocus }
        onBeforeInput={ disableNonNumeric }
      />
    </WrapperCorner>
  );
};

export default Input;
