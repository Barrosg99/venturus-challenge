import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit, MdShare } from 'react-icons/md';

export default function ListComponent({
  name, description, remove, edit, share, id,
}) {
  return (
    <Component>
      <div>
        <span>{name}</span>
      </div>
      <div />
      <div>
        <span>{description}</span>
        <div>
          <FaTrashAlt data-tip="Remove" onClick={() => remove(id)} />
          <MdShare data-tip="Share" onClick={share} />
          <MdEdit data-tip="Edit" onClick={() => edit(id)} />
        </div>
        <ReactTooltip effect="solid" backgroundColor="black" />
      </div>
    </Component>
  );
}

const Component = styled.li`
  &:last-child {
    margin-bottom: 5px;
  }

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
    overflow: hidden;
    white-space: pre-line;
    width: 100%;
  }
`;
