/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { css } from 'styled-components';
import App from './App';

describe('Rendering header', () => {
  it('Renders <App /> component correctly ', () => {
    render(<App />);
    expect(screen.getByText(/squad management tool/i)).toBeInTheDocument();
  });

  it('should render header without h1 on mobile', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toHaveStyleRule('display', 'none', {
      media: '(max-width:850px)',
      modifier: css`h1`,
    });
  });
});
