import React from "react";

import Box from '@material-ui/core/Box';

import classes from '../Page.module.scss';
import logo from '../../../images/logo.svg';

const PageMenuHeader = () => {
    return (
        <Box className={classes.userData}>
            <img src={logo} alt="logo" className={classes.userLogo} />
            <Box className={classes.boxUser}>
                <h2 className={classes.userName}>User/1</h2>
                <p className={classes.team}>Team member Tube</p>
            </Box>
        </Box>
    );
}

export default PageMenuHeader