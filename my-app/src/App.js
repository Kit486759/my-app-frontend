import React, { useEffect } from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';

function App() {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic YWRtaW46YWRtaW4=");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };


  const test = async () => {
    try {
      fetch("http://localhost:1111", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    catch (err) {
      console.log(err)
    }
  }





    return (


      <>
        <button onClick={()=>test()}>Test</button>
        <Typography variant="h1">Popdog</Typography>
        <Box>
          <img src="https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif" alt="dog"></img>
        </Box>

      </>
    );
  }

  export default App;
