/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('first test', () => {
  it('Renders <App /> component correctly ', () => {
    render(<App />);
    expect(screen.getByText(/batata/i)).toBeInTheDocument();
  });
});
