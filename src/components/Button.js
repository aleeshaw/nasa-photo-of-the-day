import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.dateChange} className="button">{props.buttonVal}</button>
  );
}; 


export default Button;