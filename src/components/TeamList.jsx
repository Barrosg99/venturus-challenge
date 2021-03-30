import React from 'react';
import styled from 'styled-components';
// import { FaSort } from 'react-icons/fa';
import ListHeader from './ListHeader';

export default function Teamlist() {
  return (
    <ListContainer>
      <ListHeader />
      {/* teams list */}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width:100%;
  font-size: 0.7rem;
  font-weight: bold;
  color: #303030e6;
  padding: 18px 6px 0px;

`;
