import React from 'react';
import { Button, Typography } from '@material-ui/core';
import classes from './MainAuthorization.module.css';
import Main from '../Main/Main';

function MainAuthorization() {
  return (
    <Main children={
      <>
        <Typography variant="h2" className={classes.subtitle}>Sign In</Typography>
        <form className={classes.form}>
          <input type="email" name="email" placeholder="Email*" className={classes.input}></input>
          <input type="password" name="password" placeholder="Password*" required autoComplete="off" className={classes.input}></input>
          <Button size="small">Forgot password?</Button>
        </form>
      </>
    }/>
  );
}

export default MainAuthorization;