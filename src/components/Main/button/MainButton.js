import React from 'react';
import { useSelector } from 'react-redux'
import classNames from 'classnames';


import { Button } from '@material-ui/core';


import classes from '../../Main/Main.module.scss';


const MainButton = ({ title, name, position }) => {
    const isAuth = useSelector((state) => state.users.isAuth)

    return (
        <Button
            variant="contained"
            className={classNames(
                classes.button,
                classes[`button_${position}`],
                classes[`button${name}`], {
                [classes[`button${name}_disabled`]]: !isAuth
            })}
            disabled={!isAuth}>
            <p className={classes.buttonText}>{`${title}`}</p>
        </Button>
    );
};

export default MainButton