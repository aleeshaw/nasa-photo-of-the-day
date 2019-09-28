import React from 'react';
import styled from 'styled-components';

//styles
const StyledButton = styled.button`
  height: 25px;
  width: 70px;
  background-color: light-gray;
`;

const Button = (props) => {
  return (
    <StyledButton onClick={() => props.dateChange} className="button">{props.buttonVal}</StyledButton>
  );
}; 


export default Button;