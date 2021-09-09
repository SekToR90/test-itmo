import React from 'react';
import Box from '@material-ui/core/Box';
import classes from './Page.module.scss';
import logo from '../../images/logo.svg';
import { Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux'

import { CANSEL_AUTH } from '../../actions/actions'

function Page({title, dispatch}) {
    const location = useLocation();
    const pathName = location.pathname; 
    
    const buttonStyles = {
        borderRadius: '0', textDecoration: 'none',
        textTransform: 'none', justifyContent: 'flex-start', paddingLeft: '27px',
        marginBottom: '26px'
    };

    const iconStyles = {
        color: '#86BD24', backgroundColor: '#fff',
        padding: '5px', borderRadius: '5px', width: '15px',
        height: '15px'
    };

    const iconExitStyles = {
        backgroundColor: '#E8E8E8', padding: '4px', width: '18px',
        height: '18px', borderRadius: '5px', transform: 'rotate(-90deg)'
    };

    const bottomButtons = {
        justifyContent: 'flex-start'
    }
    
    function buttonLogout() {
        dispatch({ type: CANSEL_AUTH })
      }
    
    return (
        <Box className={classes.page}>
            <Box boxShadow={3} className={classes.pageMenu}>
                <section className={classes.pageMenuSection}>
                    <Box className={classes.userData}>
                        <img src={logo} alt="logo" className={classes.userLogo} />
                        <Box className={classes.boxUser}>
                            <h2 className={classes.userName}>User/1</h2>
                            <p className={classes.team}>Team member Tube</p>
                        </Box>
                    </Box>
                    <Link to='/page-1' style={ pathName === '/page-1' ? 
                            {...buttonStyles,
                            backgroundColor: '#86BD24'} : {paddingLeft: '27px',
                            marginBottom: '26px', textDecoration: 'none'}
                        }>
                        <Button style={{
                            textTransform: 'none'
                        }} disableElevation>
                            <WorkIcon alt="work-icon" style={iconStyles} />
                            <span className={classes.buttonText}>Page_1</span>
                        </Button>
                    </Link>
                    <Link to='/page-2' style={ pathName === '/page-2' ? 
                            {...buttonStyles,
                            backgroundColor: '#86BD24'} : {paddingLeft: '27px',
                            marginBottom: '26px', textDecoration: 'none'}
                        }>
                    <Button style={{
                            textTransform: 'none'
                        }} disableElevation>
                        <DonutSmallIcon alt="work-icon" style={iconStyles} />
                        <span className={classes.buttonText}>Page_2</span>
                    </Button>
                    </Link>
                    <Link to='/page-3' style={ pathName === '/page-3' ? 
                            {...buttonStyles,
                            backgroundColor: '#86BD24'} : {paddingLeft: '27px',
                            marginBottom: '26px', textDecoration: 'none'}
                        }>
                    <Button style={{
                            textTransform: 'none'
                        }} disableElevation>
                        <GroupIcon alt="work-icon" style={iconStyles} />
                        <span className={classes.buttonText}>Page_3</span>
                    </Button>
                    </Link>
                </section>
                <section className={classes.pageMenuSection}>
                    <Button disableElevation style={bottomButtons}>
                        <ExitToAppIcon style={iconExitStyles} />
                        <Link to='/' style={{color: '#717171',
                         textDecoration: 'none'
                         }}>
                        <span className={classes.buttonLink}>Main Page</span>
                        </Link>
                    </Button>
                    <Button disableElevation style={bottomButtons} onClick={buttonLogout}>
                        <ExitToAppIcon style={{
                            ...iconExitStyles, 
                            transform: 'rotate(-180deg)'
                        }} />
                        <span className={classes.buttonLink}>Logout</span>
                    </Button>
                </section>
            </Box>
            <h1 className={classes.textPage}>{`${title}`}</h1>
        </Box>
    );
}
  
const mapStateToProps = (state) => ({
    isAuth: state.users.isAuth,
    user: state.users.user,
  })
  
  export default connect(mapStateToProps)(Page)