import React from 'react';
import styled from 'styled-components';
import { Container, SoccerField, TeamList } from '../../components';

export default function Home() {
  return (
    <Wrapper>
      <Container
        title="My teams"
        icon
        width="47%"
        minHeight="491px"
      >
        <TeamList />
      </Container>
      <div>
        <Container
          title="Top 5"
          width="100%"
        >
          Top 5 component
        </Container>
        <SoccerField />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display:flex;
  justify-content:space-between;
  padding: 40px 30px;
  margin-top: 66px;

  & > div:first-of-type {
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > section {
      height: 48%;
    }
  }
`;
