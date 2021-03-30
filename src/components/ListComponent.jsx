import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit, MdShare } from 'react-icons/md';

export default function ListComponent() {
  return (
    <Component>
      <div>
        <span>Name</span>
      </div>
      <div />
      <div>
        <span>Description</span>
        <div>
          <FaTrashAlt data-tip="Remove" />
          <MdShare data-tip="Share" />
          <MdEdit data-tip="Edit" />
        </div>
        <ReactTooltip effect="solid" backgroundColor="black" />
      </div>
    </Component>
  );
}

const Component = styled.li`
  div:first-child {
    width: 28%;
  }

  & > div:last-child {
    width: 75%;
    div:nth-child(2) {
      display: flex;
      justify-content: space-evenly;
      width: 25%;
    }
  }

  & > div:nth-child(2) {
    width: 1px;
    background: #cac7c7;
    margin: 0 10px;
    height: 25px;
    visibility: hidden;
  }

  & > div:nth-child(odd) {
    display:flex;
    justify-content:space-between;
  }

  span {
    word-wrap: break-word;
    width: 100%;
  }
`;
