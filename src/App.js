import React from 'react';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" justifyContent="space-between" m={1} p={1}>
        <Box p={1}>
          Item 1
        </Box>
        <Box p={1}>
          Item 1
        </Box>
      </Box>
    </div>
  );
}

export default App;
