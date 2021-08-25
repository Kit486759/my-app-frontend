import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';

function App() {


    return (
      <>
        {/* <button onClick={()=>test()}>Test</button> */}
        <Typography variant="h1">Popdog</Typography>
        <Box>
          <img src="https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif" alt="dog"></img>
        </Box>

      </>
    );
  }

  export default App;
