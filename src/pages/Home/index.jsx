import React from 'react';
import styled from 'styled-components';
import { Container, TeamList } from '../../components';

export default function Home() {
  return (
    <Wrapper>
      <Container
        title="My teams"
        icon
        width="47%"
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
        <div>
          soccerField Component
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display:flex;
  justify-content:space-between;
  padding: 40px 30px;
  height: 89vh;

  & > div:nth-child(2) {
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
