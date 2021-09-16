import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import classNames from 'classnames';


import Box from '@material-ui/core/Box';


import classes from './Main.module.scss';
import MainButton from './button/MainButton';


function MainRegister({ children }) {
  const isAuth = useSelector((state) => state.users.isAuth)

  return (
    <Box display="flex" justifyContent="space-evenly" style={{ padding: '64px 0 0 0' }} className={classNames(classes.mainBox)} m={1} p={1}>
      <div id="buttonContainer">
        <MainButton title={'PROJECTS'} name={'Progects'} position={'first'}/>
        {isAuth ?
          (<Link to='/page-1'>
            <MainButton title={'MARKET'} name={'Market'} position={'second'}/>
          </Link>) :
          <MainButton title={'MARKET'} name={'Market'} position={'second'}/>
        }
        <MainButton title={'USER'} name={'User'} />
      </div>
      <Box display="flex" flexDirection="column">
        <h1 className={classNames(classes.title)}>Welcome to the ...</h1>
        {children}
      </Box>
    </Box>
  );
}

export default MainRegister