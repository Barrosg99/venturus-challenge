/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa';

export default function ListHeader() {
  return (
    <StyledHeader>
      <div onClick={() => console.log('sort name')} aria-hidden>
        <span>Name</span>
        <FaSort />
      </div>
      <div />
      <div onClick={() => console.log('sort description')} aria-hidden>
        <span>Description</span>
        <FaSort />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;

  div:first-child {
    width: 20%;
  }

  div:last-child {
    width: 75%;
  }

  div:nth-child(2) {
    width: 1px;
    background: #cac7c7;
    margin: 0 10px;
    height: 25px;
  }

  div:nth-child(odd) {
    display:flex;
    justify-content:space-between;
    cursor: pointer;
  }
`;
