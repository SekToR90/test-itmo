import React from 'react';
import { Button, Typography } from '@material-ui/core';
import classes from './MainAuthorization.module.css';
import Main from '../Main/Main';

function MainAuthorization() {
  return (
    <Main children={
      <>
        <Typography variant="h2" className={classes.subtitle}>Sign In</Typography>
      </>
    }/>
  );
}

export default MainAuthorization;