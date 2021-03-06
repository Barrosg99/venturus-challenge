/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import joi from 'joi-browser';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router';
import {
  Container, Input, InputTags, Label,
} from '../../components';
import TeamContext from '../../context/TeamContext';
import { media850 } from '../../utils/mediaQuery';

export default function CreateTeam() {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [errorState, setErrorState] = useState({});
  const [edit, setEdit] = useState(false);
  const { team, setTeam } = useContext(TeamContext);
  const { teams } = team;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const selectedTeam = teams.find((squad) => squad.id === Number(id));
      if (!selectedTeam) {
        alert('Team not Found');
        return history.push('/');
      }
      setName(selectedTeam.name);
      setWebsite(selectedTeam.website);
      setType(selectedTeam.type);
      setDescription(selectedTeam.description);
      setTags(selectedTeam.tags);
      setEdit(true);
    }
  }, []);

  function validate() {
    const schema = joi.object({
      name: joi.string().required(),
      website: joi.string().uri().required(),
      type: joi.string().valid(['real', 'fantasy']).required(),
    });
    const { error } = schema.validate({
      name,
      website,
      type,
    }, { abortEarly: false });
    const errors = {};
    if (error) {
      error.details.forEach((err) => {
        errors[err.context.key] = true;
      });
      setErrorState(errors);
      return true;
    }
    setErrorState(errors);
    return false;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (validate()) return;

    if (edit) {
      teams.every((squad) => {
        if (squad.id === Number(id)) {
          squad.name = name;
          squad.description = description;
          squad.type = type;
          squad.tags = tags;
          squad.website = website;
          return false;
        }
        return true;
      });
      history.push('/');
      return;
    }

    teams.push({
      id: team.id,
      name,
      description,
      type,
      tags,
      website,
    });
    setTeam({
      id: team.id + 1,
      teams: [...teams],
    });
    history.push('/');
  }

  return (
    <Container
      title={edit ? 'Edit your Team' : 'Create your team'}
      margin="106px auto 19.6px"
      width="94%"
      mediaWidth="94%"
      paddingBottom="20px"
    >
      <StyledForm onSubmit={onSubmit}>
        <h1>TEAM INFORMATION </h1>
        <div>
          <Input
            label="Team Name"
            placeholder="Insert team name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errorState.name}
          />
          <Input
            label="Team Website"
            placeholder="http://myteam.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            error={errorState.website}
          />
        </div>
        <Label
          width="100%"
          marginTop="15px"
          marginBot="30px"
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
            <Label
              error={errorState.type}
            >
              Team Type
              <div id="types" onChange={(e) => setType(e.target.value)}>
                <Input
                  type="radio"
                  label="Real"
                  name="types"
                  width="initial !important"
                  value="real"
                  selected={type}
                  paddingRight="15px"
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
              <Label
                label="Tags"
              >
                <InputTags
                  value={tags}
                  onChange={(e) => setTags(e)}
                />
              </Label>
            </Label>
          </div>
        </Label>
        <h1>CONFIGURE SQUAD </h1>
        <div>
          <div>
            selected players
            <button type="submit">Save</button>
          </div>
          <div>
            search players
          </div>
        </div>
      </StyledForm>
    </Container>
  );
}

const StyledForm = styled.form`
  margin: 30px auto 30px;
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

  & > div{
    display: flex;
    justify-content: space-between;
    margin-top: 55px;
    width:100%;
  }

  textarea {
    width: 45%;
    font-size: 15px;
    font-family: inherit;
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

  #types {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  button {
    display: block;
    width:100%;
    background-image: linear-gradient(#ac427d,#7d3b80);
    padding: 7px;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: 1px solid #c73b42
  }

  .react-tagsinput {
    border: 1px solid silver;
    border-radius: 3px;
    font-size: 15px;
    overflow: hidden;
    padding-left: 5px;
    padding-top: 5px;
    margin-top: 10px;
    height: 60%;
  }

  .react-tagsinput-tag {
    background-color: #c73b42;
    border-radius: 15px;
    color: white;
    display: inline-block;
    font-family: sans-serif;
    font-weight: 400;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 3px 18px;
  }

  .react-tagsinput-input {
    background: transparent;
    border: 0;
    color: black;
    font-family: sans-serif;
    font-weight: 400;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 5px;
    width: 80px;
  }

  .react-tagsinput-remove {
    cursor: pointer;
    font-weight: bold;
  }

  .react-tagsinput-tag a::before {
    content: " x";
  }

  ${media850} {
    div {
      flex-direction: column;
    }

    textarea {
      width: 100%;
      margin-bottom: 10px;
    }

    label {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
