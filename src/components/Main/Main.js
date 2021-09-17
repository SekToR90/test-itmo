import React from 'react';
import { Link } from 'react-router-dom';


import Box from '@material-ui/core/Box';


import classes from './Main.module.scss';
import MainButton from './button/MainButton';


function MainRegister({ children }) {

  return (
    <Box display="flex" justifyContent="space-evenly" style={{ padding: '64px 0 0 0' }} className={classes.mainBox} m={1} p={1}>
      <div id="buttonContainer">
        <MainButton title={'PROJECTS'} name={'Progects'} position={'first'} />

        <Link to='/page-1'>
          <MainButton title={'MARKET'} name={'Market'} position={'second'} />
        </Link>

        <MainButton title={'USER'} name={'User'} />
      </div>
      <Box display="flex" flexDirection="column">
        <h1 className={classes.title}>Welcome to the ...</h1>
        {children}
      </Box>
    </Box>
  );
}

export default MainRegister