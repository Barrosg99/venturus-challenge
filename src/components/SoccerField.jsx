import React from 'react';
import styled from 'styled-components';

export default function SoccerField() {
  return (
    <Container>
      <div>componente 1</div>
      <div>
        <span />
      </div>
      <div>componente 2</div>
    </Container>
  );
}
const Container = styled.div`
  background-image: linear-gradient(#ba457c,#683e8e);
  height: 50%;
  display: flex;
  justify-content: space-around;
  border-radius: 11px;

  div:nth-child(2){
    background-color: silver;
    width:1px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid silver;
      margin-left: -25px;
    }
  }
`;
