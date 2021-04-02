import React from 'react';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { media850 } from '../utils/mediaQuery';

export default function Container({
  title, children, icon = false, width, margin, minHeight, mediaWidth, paddingBottom,
}) {
  return (
    <StyledContainer
      width={width || 'initial'}
      margin={margin}
      minHeight={minHeight}
      mediaWidth={mediaWidth || '100%'}
      paddingBottom={paddingBottom}
    >
      <div>
        <h1>{title}</h1>
        {icon && (<Link to="/create-team"><GoPlus /></Link>)}
      </div>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.section` 
  background-color: white;
  width:${(props) => props.width};
  border-radius: 7px;
  box-shadow: 0px 0px 2px 1px #00000026;
  margin:${(props) => props.margin};
  min-height:${(props) => props.minHeight};


  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 18px;
    border-bottom: 1px solid #cac7c7;
    align-items: center;

    svg {
      background-image: linear-gradient(to bottom,#aa4179, #87408a);
      border-radius: 10px;
      color: white;
      padding: 6.9px;
      font-size: 34px;
    }

    h1 {
      color: #4e336e;
      font-weight:bold
    }
  }

  ${media850} {
    width:${(props) => props.mediaWidth};
    padding-bottom:${(props) => props.paddingBottom}
  }
`;
