import React, { useState } from 'react';
import styled from 'styled-components';
import TagsInput from 'react-tagsinput';
import { Container, Input, Label } from '../../components';

export default function CreateTeam() {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  // const [tags, setTags] = useState([]);
  return (
    <Container
      title="Create your team"
      margin="106px auto 19.6px"
      width="94%"
    >
      <StyledForm>
        <h1>TEAM INFORMATION </h1>
        <div>
          <Input
            label="Team Name"
            placeholder="Insert team name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Team Website"
            placeholder="http://myteam.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>
        <Label
          width="100%"
          marginTop="15px"
        >
          Description
          <div>
            <textarea
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Label>
              Team Type
              <div id="types" onChange={(e) => setType(e.target.value)}>
                <Input
                  type="radio"
                  label="Real"
                  name="types"
                  width="initial !important"
                  value="real"
                  selected={type}
                />
                <Input
                  type="radio"
                  label="Fantasy"
                  name="types"
                  width="initial !important"
                  value="fantasy"
                  selected={type}
                />
              </div>
            </Label>
          </div>
        </Label>
        {/* <TagsInput
          value={tags.tags}
          onChange={(e) => setTags(e)}
        /> */}
      </StyledForm>
    </Container>
  );
}

const StyledForm = styled.form`
  margin: 30px auto 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:80%;

  h1 {
    text-align: center;
    color: #909090;
    font-size: 16px;
    font-weight: bold;
  }

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    margin-top: 55px;
    width:100%;
  }

  textarea {
    width: 45%;
    font-size: 15px;
    border: 1px solid silver;
    border-radius: 3px;
    resize: none;
    padding: 6px 10px;
  }

  & > label >  div {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

/* #c73b42 */
  #types {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
