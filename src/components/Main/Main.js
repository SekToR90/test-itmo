import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import classes from './Main.module.scss';
import classNames from 'classnames';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

function MainRegister({ children, isAuth }) {
  return (
    <Box display="flex" justifyContent="space-evenly" className={classNames(classes.mainBox)} m={1} p={1}>
      <div id="buttonContainer">
        <Button
          variant="contained"
          className={classNames(
            classes.button,
            classes.button_first,
            classes.buttonProgects, {
            [classes.buttonProgects_disabled]: !isAuth
          })}
          disabled={!isAuth}>
          <p className={classNames(classes.buttonText)}>PROJECTS</p>
        </Button>
        <Link to='/page-1'>
          <Button
            variant="contained"
            className={classNames(
              classes.button,
              classes.button_second,
              classes.buttonMarket, {
              [classes.buttonMarket_disabled]: !isAuth
            })}
            disabled={!isAuth}>
            <p className={classNames(classes.buttonText)}>MARKET</p>
          </Button>
        </Link>
        <Button
          variant="contained"
          className={classNames(
            classes.button,
            classes.buttonUser, {
            [classes.buttonUser_disabled]: !isAuth
          })}
          disabled={!isAuth}>
          <p className={classNames(classes.buttonText)}>USER</p>
        </Button>
      </div>
      <Box display="flex" flexDirection="column">
        <h1 className={classNames(classes.title)}>Welcome to the ...</h1>
        {children}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.users.isAuth
})

export default connect(mapStateToProps)(MainRegister)
