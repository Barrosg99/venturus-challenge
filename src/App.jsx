import React from 'react';
import { Reset } from 'styled-reset';
import {
  BrowserRouter,
} from 'react-router-dom';
import Globalstyles from './utils/globalstyle';
import Routes from './routes';
import { TeamProvider } from './context/TeamContext';

function App() {
  return (
    <TeamProvider>
      <BrowserRouter>
        <Reset />
        <Globalstyles />
        <Routes />
      </BrowserRouter>
    </TeamProvider>
  );
}

export default App;
