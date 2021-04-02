/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import TeamContext from '../context/TeamContext';
import ListComponent from './ListComponent';
import ListHeader from './ListHeader';

export default function TeamList() {
  // eslint-disable-next-line no-unused-vars
  const { team, setTeam } = useContext(TeamContext);
  const history = useHistory();

  function remove(id) {
    const newTeam = team.filter((squad) => squad.id !== id);
    setTeam(newTeam);
  }

  function edit(id) {
    history.push(`/team/${id}`);
  }

  function share() {
    alert('Go tell your frieds');
  }
  return (
    <ListContainer>
      <ListHeader />
      <ul>
        {team.map((squad) => (
          <ListComponent
            name={squad.name}
            description={squad.description}
            key={squad.id}
            id={squad.id}
            remove={remove}
            edit={edit}
            share={share}
          />
        ))}
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
