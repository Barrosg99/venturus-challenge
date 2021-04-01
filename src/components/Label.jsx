/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';

export default function Label({
  children, label, width, marginTop, type, selected,
}) {
  return (
    <StyledLabel
      width={width || '45%'}
      marginTop={marginTop}
      type={type}
      selected={selected}
      label={label}
    >
      {label}
      {children}
    </StyledLabel>
  );
}
const StyledLabel = styled.label`
  width: ${(props) => props.width};
  margin-top:${(props) => props.marginTop};
  font-size: 0.7rem;
  font-weight: bold;
  user-select: none;  
  color: ${({ selected, label }) => {
    if (selected) {
      if ((selected === 'real' && label === 'Real') || (selected === 'fantasy' && label === 'Fantasy')) return '#c73b42 ';
    } else return '#181818d9';
  }};

  display: ${(props) => props.type === 'radio' && 'flex'};
  flex-direction: ${(props) => props.type === 'radio' && 'row-reverse'};
  position: ${(props) => props.type === 'radio' && 'relative'};
  padding-left: ${(props) => props.type === 'radio' && '35px'};
  height: ${(props) => props.type === 'radio' && '20px'};
  align-items: ${(props) => props.type === 'radio' && 'center'};

  .radio {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid silver;
    border-radius: 50%;
  }
`;
