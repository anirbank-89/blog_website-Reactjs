import React from 'react';
import { Box } from "@material-ui/core";
// component imports
import Home from './components/home/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Box style={{ marginTop: 64 }}>
        <Home />
      </Box>
    </React.Fragment >
  );
}

export default App;