import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import classes from './Main.module.scss';
import classNames from 'classnames';

function MainRegister(props) {
  return (
    <>
    <div id="buttonContainer">
      <Button variant="contained" className={classNames(classes.button, classes.button_first, classes.buttonProgects_disabled)}  disabled>
      <p className={classNames(classes.buttonText)}>PROJECTS</p>
      </Button>
      <Button variant="contained" className={classNames(classes.button, classes.button_second, classes.buttonMarket_disabled)} disabled>
        <p className={classNames(classes.buttonText)}>MARKET</p>
      </Button>
      <Button variant="contained" className={classNames(classes.button, classes.buttonUser_disabled)} disabled>
      <p className={classNames(classes.buttonText)}>USER</p>
      </Button>
    </div>
    <Box display="flex" flexDirection="column">
      <h1 className={classNames(classes.title)}>Welcome to the ...</h1>
      {props.children}
    </Box>
    </>
  );
}

export default MainRegister;
