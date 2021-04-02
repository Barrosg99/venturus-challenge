/* eslint-disable no-undef */
import React from 'react';
import { css } from 'styled-components';
import { render, screen } from './custom-render';
import App from '../App';

describe('Rendering Home page', () => {
  it('Renders home page correctly ', () => {
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

  it('should render main with flex-direction column-reverse on mediaQuery', () => {
    render(<App />);
    expect(screen.getByTestId('main')).toHaveStyleRule('flex-direction', 'column-reverse', {
      media: '(max-width:850px)',
    });
  });

  it('should render container with width 100% on mediaQuery', () => {
    render(<App />);
    expect(screen.getByTestId('main').children[0]).toHaveStyleRule('width', '100%', {
      media: '(max-width:850px)',
    });
  });

  it('should render soccerFieldContainer with min-height: 245.5px on mediaQuery', () => {
    render(<App />);
    const soccerFieldContainer = screen.getByTestId('main').children[1].children[1];
    expect(soccerFieldContainer).toHaveStyleRule('min-height', '245.5px', {
      media: '(max-width:850px)',
    });
  });
});
