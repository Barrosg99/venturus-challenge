import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../utils/mediaQuery';

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <img src="/logo.png" alt="venturus-logo" />
        <h1>Squad Management Tool</h1>
      </div>
      <div>
        <h2>John Doe</h2>
        <span>JD</span>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-image: linear-gradient(to right, #c33c50, #88376d);
  display: flex;
  justify-content:space-between;
  padding: 14px;
  position:fixed;
  top:0;
  width:100vw;

  img {
    width: 42px;
    margin-right: 15px;
  }

  div {
    display: flex;
    align-items:center;
  }

  h1,h2 {
    color: white
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    margin: 0 10px;
  }

  span:nth-child(2) {
    background-color: white;
    border-radius: 50%;
    padding: 10px;
  }

  ${mediaQuery} {
    h1 {
      display:none;
    }
  }
`;
