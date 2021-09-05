import React from 'react';
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';
import classes from './Main.module.css';

function MainRegister(props) {
  return (
    <>
    <Box>
      <Button variant="contained" className={`${classes.button} ${classes.buttonProgects_desabled}`}  disabled></Button>
      <Button variant="contained" className={`${classes.button} ${classes.buttonUser_desabled}`} disabled></Button>
      <Button variant="contained" className={`${classes.button} ${classes.buttonMarket_desabled}`} disabled></Button>
    </Box>
    <Box display="flex" flexDirection="column">
      <Typography variant="h1" className={classes.title}>Welcome to the ...</Typography>
      {props.children}
    </Box>
    </>
  );
}

export default MainRegister;