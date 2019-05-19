import React from 'react';
import { PersistentDrawer } from './Components/AppBar/PersistenDrawer/PersistentDrawer';
import { StateAppBar } from './Components/AppBar/AppBar';
import { StateDrawer } from './Components/Drawer/Drawer';

export function App() {
  return (
    <div className="App">
      <StateAppBar/>
      <StateDrawer/>
    </div>
  );
}
