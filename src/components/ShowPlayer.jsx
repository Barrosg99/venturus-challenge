import React from 'react';
import styled from 'styled-components';

export default function ShowPlayer({ type, playerName, pickRate }) {
  return (
    <Container>
      <h1>
        {type === 'most'
          ? 'Most Picked Player'
          : 'Less Picked Player'}
      </h1>
      <div>
        <span>{playerName}</span>
        <span>{pickRate}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 19px 0px;
    color: white;
    font-weight: bold;
  }

  div {
    width: 80%;
    padding-top: 80%;
    border-radius: 50%;
    border: 2px dashed #7200ff;
    position: relative;

    span {
      color: white;
      position: absolute;
    }

    span:first-child {
      top: 27%;
      left: 19%;
      font-size: 60px;
    }

    span:nth-child(2) {
      top: 0;
      right: -53px;
      width: 50%;
      border-bottom: 1px solid;
    }
  }
  
`;
