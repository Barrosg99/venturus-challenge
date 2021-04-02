/* eslint-disable no-undef */
import React from 'react';
import { css } from 'styled-components';
import { render, screen } from './custom-render';
import App from '../App';

describe('Rendering <App />', () => {
  it('Renders <App /> component correctly ', () => {
    render(<App />);
    expect(screen.getByText(/squad management tool/i)).toBeInTheDocument();
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/2020 - All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/my teams/i)).toBeInTheDocument();
    expect(screen.getByText(/^top 5$/i)).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/most picked player/i)).toBeInTheDocument();
    expect(screen.getByText(/less picked player/i)).toBeInTheDocument();
  });

  it('should render header without h1 on mobile', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toHaveStyleRule('display', 'none', {
      media: '(max-width:850px)',
      modifier: css`h1`,
    });
  });
});
