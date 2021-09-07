import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import classes from './MainAuthorization.module.css';
import Main from '../Main/Main';
import classNames from 'classnames';



export function MainAuthorization() {

  const GreenCheckbox = withStyles({
    root: {
      color: '#0298A9',
      '&$checked': {
        color: '#0298A9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [state, setState] = React.useState({
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    return (
      <Main children={
        <>
          <h2 className={classNames(classes.subtitle)}>Sign In</h2>
          <form id="formSignIn" className={classNames(classes.form)}>
            <input type="email" name="email" placeholder="Email*" className={classNames(classes.input)}></input>
            <input type="password" name="password" placeholder="Password*" required autoComplete="off" className={classNames(classes.input)}></input>
            <Button size="small" className={classNames(classes.buttonForgotPassword)}>Forgot password?</Button>
            <Button variant="contained" className={classNames(classes.buttonSignIn)} disableElevation>Sign In</Button>
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
              label="Remember password"
            />
          </form>
        </>
      } />
    );
  }

  
