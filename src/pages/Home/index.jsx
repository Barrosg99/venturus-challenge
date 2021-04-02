import React from 'react';
import styled from 'styled-components';
import { Container, SoccerField, TeamList } from '../../components';
import { media570, media850 } from '../../utils/mediaQuery';

export default function Home() {
  return (
    <Wrapper data-testid="main">
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

  ${media850} {
    flex-direction: column-reverse;

    & > div:first-of-type {
      width: 100%;
      min-height: 330px;
      margin-bottom: 15px;
    }
  }

  ${media570} {
    & > div:first-of-type {
      width: 100%;
      min-height: initial;
      margin-bottom: 15px;
    }
  }
`;
