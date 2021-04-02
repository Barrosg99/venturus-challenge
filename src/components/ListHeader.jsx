/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa';
import TeamContext from '../context/TeamContext';

export default function ListHeader() {
  const { team, setTeam } = useContext(TeamContext);
  const [hasClicked, setHasClicked] = useState(true);
  function sortBy(key) {
    if (hasClicked) {
      team.sort((a, b) => a[key].localeCompare(b[key]));
      setTeam([...team]);
    } else {
      team.sort((a, b) => b[key].localeCompare(a[key]));
      setTeam([...team]);
    }
    setHasClicked(!hasClicked);
  }

  return (
    <StyledHeader>
      <div onClick={() => sortBy('name')} aria-hidden>
        <span>Name</span>
        <FaSort />
      </div>
      <div />
      <div onClick={() => sortBy('description')} aria-hidden>
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
  margin-bottom: 10px;

  div:first-child {
    width: 28%;
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
