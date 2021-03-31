import React from 'react';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';

export default function Container({
  title, children, icon = false, width,
}) {
  return (
    <StyledContainer
      width={width || 'initial'}
    >
      <div>
        <h1>{title}</h1>
        {icon && (<GoPlus />)}
      </div>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.section` 
  background-color: white;
  width:${(props) => props.width};
  border-radius: 7px;
  box-shadow: 0px 0px 2px 1px #00000026;


  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 18px;
    border-bottom: 1px solid #cac7c7;
    align-items: center;

    svg {
      background-image: linear-gradient(to bottom,#aa4179, #87408a);
      border-radius: 10px;
      color: white;
      padding: 6.9px;
      font-size: 34px;
    }
  }

  h1 {
    color: #4e336e;
    font-weight:bold
  }
`;
