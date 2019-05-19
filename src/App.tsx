import React from 'react';
import { StateAppBar } from './Components/AppBar/AppBar';
import { StateDrawer } from './Components/Drawer/Drawer';
import { CssBaseline } from '@material-ui/core';
import { StateContent } from './Components/Content/Content';
import { Router } from 'react-router-dom';

export function App() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <StateAppBar />
      <StateDrawer />
      <StateContent />
    </div>
  );
}
