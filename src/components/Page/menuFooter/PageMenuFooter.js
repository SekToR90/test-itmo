import React, {memo} from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';

import { CANSEL_AUTH } from '../../../actions/actions';
import classes from '../Page.module.scss';

const PageMenuFooter = () => {
    const dispatch = useDispatch();

    const bottomButtons = {
        justifyContent: 'flex-start'
    }

    function buttonLogout() {
        dispatch({ type: CANSEL_AUTH })
    }

    return (
        <>
            <Button disableElevation style={bottomButtons}>
                <ExitToAppIcon className={classes.iconExitStyles} />
                <Link to='/' style={{
                    color: '#717171',
                    textDecoration: 'none'
                }}>
                    <span className={classes.buttonLink}>Main Page</span>
                </Link>
            </Button>
            <Button disableElevation style={bottomButtons} onClick={buttonLogout}>
                <ExitToAppIcon style={{ transform: 'rotate(-180deg)' }} className={classes.iconExitStyles} />
                <span className={classes.buttonLink}>Logout</span>
            </Button>
        </>
    );
}

export default memo(PageMenuFooter)