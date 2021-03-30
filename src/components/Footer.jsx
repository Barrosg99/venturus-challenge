import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      2020 - All rights reserved
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width:100%;
  background-color: #e9e3e7;
  position:fixed;
  bottom:0;
  text-align: center;
  padding: 5px;
  font-size: 10px;
`;
