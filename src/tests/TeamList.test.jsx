/* eslint-disable no-undef */
import React from 'react';
import { css } from 'styled-components';
import { render, screen } from './custom-render';
import App from '../App';
import TeamList from '../components/TeamList';
import TeamContext from '../context/TeamContext';
import { generateTeams } from './utils';

function renderTeamList(team) {
  return render(
    <TeamContext.Provider value={{ team, setTeam: jest.fn() }}>
      <TeamList />
    </TeamContext.Provider>,
  );
}

describe('rendering Team List component', () => {
  it('should render all teams', () => {
    const teams = generateTeams(15);
    renderTeamList(teams);
    const teamsInDocument = screen.getAllByText('bbbbb');
    expect(teamsInDocument.length).toBe(15);
  });
});
