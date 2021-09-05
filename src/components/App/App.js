import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import MainAuthorization from '../MainAuthorization/MainAuthorization'

function App() {
  return (
    <div className="App">
      <Box display="flex" justifyContent="space-between" m={1} p={1}>
        <MainAuthorization />
      </Box>
    </div>
  );
}

export default App;
