import React from "react";
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';


import { Button } from '@material-ui/core';


import classes from '../Page.module.scss';


const PageBotton = (props) => {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <Link to={`${props.link}`} className={classNames(classes.buttonStyles, {
            [classes.buttonStyles_active]: pathName === `${props.link}`
        })} >
            <Button style={{
                textTransform: 'none'
            }} disableElevation>
                {props.children}
                <span className={classes.buttonText}>{`${props.title}`}</span>
            </Button>
        </Link>
    );
}

export default PageBotton