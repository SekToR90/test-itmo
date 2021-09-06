import React from 'react';
import Box from '@material-ui/core/Box';
import { Button, Grid, Typography } from '@material-ui/core';
import classes from './Main.module.scss';
import classNames from 'classnames';

function MainRegister(props) {
  return (
    <>
    <div id="buttonContainer">
      <Button variant="contained" className={classNames(classes.button, classes.button_first, classes.buttonProgects_disabled)}  disabled></Button>
      <Button variant="contained" className={classNames(classes.button, classes.button_second, classes.buttonMarket_disabled)} disabled>MARKET</Button>
      <Button variant="contained" className={classNames(classes.button, classes.buttonUser_disabled)} disabled></Button>
    </div>
    <Box display="flex" flexDirection="column">
      <Typography variant="h1" className={classes.title}>Welcome to the ...</Typography>
      {props.children}
    </Box>
    </>
  );
}

export default MainRegister;
