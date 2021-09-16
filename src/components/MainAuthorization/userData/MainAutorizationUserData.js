import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Box from '@material-ui/core/Box';


import classes from '../../MainAuthorization/MainAuthorization.module.scss';
import homeImage from '../../../images/home-image.svg';
import logoutImg from '../../../images/logout-img.svg';
import { CANSEL_AUTH } from '../../../actions/actions';


const MainAutorizationUserData = () => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    function buttonLogout() {
        dispatch({ type: CANSEL_AUTH }) 
    }

    return (
        <Box className={classes.userBox}>
            <img src={homeImage} alt='homeImage' className={classes.homeImage} />
            <Box className={classes.aboutBox}>
                <h3 className={classes.userName}>{user?.name}/{user?.id}</h3>
                <a href className={classes.loadingImg} onClick={buttonLogout}><img src={logoutImg} alt='logoutImg' /> Logout</a>
            </Box>
        </Box>
    );
};

export default MainAutorizationUserData;