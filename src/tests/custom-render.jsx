import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Reset } from 'styled-reset';
import { TeamProvider } from '../context/TeamContext';
import Globalstyles from '../utils/globalstyle';

function Wrapper({ children }) {
  return (
    <TeamProvider>
      <MemoryRouter>
        <Reset />
        <Globalstyles />
        {children}
      </MemoryRouter>
    </TeamProvider>
  );
}

const customRender = (ui, options) => {
  render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
