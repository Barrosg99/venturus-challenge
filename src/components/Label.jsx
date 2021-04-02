/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';
import { media850 } from '../utils/mediaQuery';

export default function Label({
  children, label, width, marginTop, type, selected, marginBot, error, paddingRight,
}) {
  return (
    <StyledLabel
      width={width || '45%'}
      marginTop={marginTop}
      marginBot={marginBot}
      type={type}
      selected={selected}
      label={label}
      error={error}
      paddingRight={paddingRight}
    >
      {label}
      {children}
    </StyledLabel>
  );
}
const StyledLabel = styled.label`
  width: ${(props) => props.width};
  margin-top:${(props) => props.marginTop};
  margin-bottom:${(props) => props.marginBot};
  font-size: 0.7rem;
  font-weight: bold;
  user-select: none;  
  color: ${({ selected, label, error }) => {
    if (error) return '#c73b42 ';
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
    border: ${(props) => (props.error ? '1px solid #c73b42' : '1px solid silver')};
    border-radius: 50%;
  }

  .wrongField {
    border: 1px solid #c73b42
  }

  ${media850} {
    max-width: ${(props) => props.type === 'radio' && '70px'};
    padding-right: ${(props) => props.paddingRight}
  }
`;
