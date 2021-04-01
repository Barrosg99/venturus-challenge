import React from 'react';
import styled from 'styled-components';
import Label from './Label';

export default function Input({
  value, onChange, type = 'text', id, width, name,
  marginTop, label, placeholder, required, selected,
  error,
}) {
  return (
    <Label
      width={width || '45%'}
      marginTop={marginTop}
      type={type}
      selected={selected}
      label={label}
      error={error}
    >
      <StyledInput
        className={error && 'wrongField'}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {type === 'radio' && <span className="radio" /> }
    </Label>
  );
}

const StyledInput = styled.input`
  
  display: block;
  width: 100%;
  margin-top: 10px;
  font-size: 15px;
  border: 1px solid silver;
  border-radius: 3px;
  padding: 6px 10px;

  &[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &[type="radio"]:checked ~ .radio:after {
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
`;
