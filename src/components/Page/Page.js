import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import classes from './Page.module.scss';
import classNames from 'classnames';
import logo from '../../images/logo.svg';

function Page() {
    return (
        <Box display="flex">
            <Box display="flex" flexDerection="column">
                <div className={classNames(classes.gridBox)}>
                    <img src={logo} alt="logo" />
                    <p>1</p>
                    <p>2</p>
                </div>
            </Box>
        </Box>
    );
}

export default Page;