import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components';

export default function CreateTeam() {
  return (
    <Container
      title="Create your team"
      margin="106px auto 19.6px"
      width="94%"
    >
      <StyledForm>
        <h1>TEAM INFORMATION </h1>
        <div>
          <label htmlFor="name">
            Team Name
            <input type="text" id="name" placeholder="Insert team name" />
          </label>
          <label htmlFor="website">
            Team website
            <input type="text" id="website" placeholder="http://myteam.com" />
          </label>
        </div>
        <label htmlFor="description">
          Description
          <div>
            <textarea id="description" cols="30" rows="10" />
            <label htmlFor="types">
              Team Type
              <div id="types">
                <label htmlFor="real">
                  Real
                  <input type="radio" name="type" id="real" />
                  <span className="radio" />
                </label>
                <label htmlFor="fantasy">
                  Fantasy
                  <input type="radio" name="type" id="fantasy" />
                  <span className="radio" />
                </label>
              </div>
            </label>
          </div>
        </label>
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

  input {
    display: block;
    width: 100%;
    margin-top: 10px;
    font-size: 15px;
    border: 1px solid silver;
    border-radius: 3px;
    padding: 6px 10px;
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input[type="radio"]:checked ~ .radio:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    display: block;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-image: linear-gradient(to bottom,#aa4179,#87408a);
  }

  .radio {
  position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid silver;
    border-radius: 50%;
}


  textarea {
    width: 45%;
    font-size: 15px;
    border: 1px solid silver;
    border-radius: 3px;
    resize: none;
    padding: 6px 10px;
  }

  label {
    width: 45%;
    font-size: 0.7rem;
    font-weight: bold;
    color: #181818d9;
  }

  & > label >  div {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }

  & > label {
    width: 100%;
    margin-top:15px;

    label > div > label {
      display: flex;
      flex-direction: row-reverse;
      width: initial;
      position: relative;
      padding-left: 35px;
      height:20px;
      align-items: center;
    }
  }

  #types {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
