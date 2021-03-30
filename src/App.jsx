import React from 'react';
import { Reset } from 'styled-reset';
import {
  BrowserRouter,
} from 'react-router-dom';
import Globalstyles from './utils/globalstyle';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Globalstyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
