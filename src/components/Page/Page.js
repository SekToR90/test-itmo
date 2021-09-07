import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import classes from './Page.module.scss';
import classNames from 'classnames';
import logo from '../../images/logo.svg';
import { Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import Icon from '@material-ui/core/Icon';


import workIcon from '../../images/work-icon.svg'

function Page() {
    return (
        <Box display="flex">
            <Box display="flex" flexDirection="column" boxShadow={3} className={classNames(classes.pageMenu)}>
                <Box display="flex" className={classNames(classes.userData)}>
                    <img src={logo} alt="logo" className={classNames(classes.userLogo)} />
                    <Box display="flex" flexDirection="column" className={classNames(classes.boxUser)}>
                        <h2 className={classNames(classes.userName)}>User/1</h2>
                        <p className={classNames(classes.team)}>Team member Tube</p>
                    </Box>
                </Box>
                <Button style={{
                    borderRadius: '0', backgroundColor: '#86BD24',
                    textTransform: 'none', justifyContent: 'flex-start', paddingLeft: '27px',
                    marginBottom: '26px'
                }} disableElevation><WorkIcon alt="work-icon" style={{
                    color: '#86BD24', backgroundColor: '#fff',
                    padding: '5px', borderRadius: '5px', width: '15px',
                    height: '15px'
                }} /><span className={classNames(classes.buttonText)}>Page_1</span>
                </Button>
                <Button style={{
                    borderRadius: '0', backgroundColor: '#86BD24',
                    textTransform: 'none', justifyContent: 'flex-start', paddingLeft: '27px',
                    marginBottom: '26px'
                }} disableElevation><DonutSmallIcon alt="work-icon" style={{
                    color: '#86BD24', backgroundColor: '#fff',
                    padding: '5px', borderRadius: '5px', width: '15px',
                    height: '15px'
                }} /><span className={classNames(classes.buttonText)}>Page_2</span>
                </Button>
                <Button style={{
                    borderRadius: '0', backgroundColor: '#86BD24',
                    textTransform: 'none', justifyContent: 'flex-start', paddingLeft: '27px',
                    marginBottom: '26px'
                }} disableElevation><GroupIcon alt="work-icon" style={{
                    color: '#86BD24', backgroundColor: '#fff',
                    padding: '5px', borderRadius: '5px', width: '15px',
                    height: '15px'
                }} /><span className={classNames(classes.buttonText)}>Page_3</span>
                </Button>
                <Button disableElevation><ExitToAppIcon style={{
                    backgroundColor: '#E8E8E8', padding: '4px', width: '18px',
                    height: '18px', borderRadius: '5px', transform: 'rotate(-90deg)'
                }} /><span>Main Page</span></Button>
                <Button disableElevation><ExitToAppIcon style={{
                    backgroundColor: '#E8E8E8', padding: '4px', width: '18px',
                    height: '18px', borderRadius: '5px', transform: 'rotate(-180deg)'
                }} /><span>Logout</span></Button>
            </Box>
        </Box>
    );
}

export default Page;