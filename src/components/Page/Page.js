import React from 'react';
import Box from '@material-ui/core/Box';
import classes from './Page.module.scss';
import logo from '../../images/logo.svg';
import { Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';


function Page() {
    const buttonStyles = {
        borderRadius: '0', backgroundColor: '#86BD24',
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
        justifySelf: 'end'
    }

    return (
        <Box className={classes.page}>
            <Box boxShadow={3} className={classes.pageMenu}>
                <Box className={classes.userData}>
                    <img src={logo} alt="logo" className={classes.userLogo} />
                    <Box className={classes.boxUser}>
                        <h2 className={classes.userName}>User/1</h2>
                        <p className={classes.team}>Team member Tube</p>
                    </Box>
                </Box>
                <Button style={buttonStyles} disableElevation>
                    <WorkIcon alt="work-icon" style={iconStyles} />
                    <span className={classes.buttonText}>Page_1</span>
                </Button>
                <Button style={buttonStyles} disableElevation>
                    <DonutSmallIcon alt="work-icon" style={iconStyles} />
                    <span className={classes.buttonText}>Page_2</span>
                </Button>
                <Button style={buttonStyles} disableElevation>
                    <GroupIcon alt="work-icon" style={iconStyles} />
                    <span className={classes.buttonText}>Page_3</span>
                </Button>
                <Button disableElevation style={
                    bottomButtons
                }>
                    <ExitToAppIcon style={iconExitStyles} />
                    <span>Main Page</span>
                </Button>
                <Button disableElevation>
                    <ExitToAppIcon style={{
                        ...iconExitStyles,
                        transform: 'rotate(-180deg)'
                    }} />
                    <span>Logout</span>
                </Button>
            </Box>
            <h1>Page_1</h1>
        </Box>
    );
}

export default Page;