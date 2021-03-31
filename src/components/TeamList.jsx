import React from 'react';
import styled from 'styled-components';
import ListComponent from './ListComponent';
import ListHeader from './ListHeader';

export default function TeamList() {
  return (
    <ListContainer>
      <ListHeader />
      <ul>
        <ListComponent />
        <ListComponent />
        <ListComponent />
      </ul>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width:100%;
  font-size: 0.7rem;
  font-weight: bold;
  color: #303030e6;
  padding: 18px 6px 0px;

  li {
    padding: 0px 10px;
    border-radius: 6px;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
  }

  li:hover {
    background-color: #f7eef6;
    color: #873b65;
  }

`;
