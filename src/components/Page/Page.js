import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';


import classes from './Page.module.scss';
import logo from '../../images/logo.svg';
import { CANSEL_AUTH } from '../../actions/actions';
import PageBotton from './button/PageButton';


function Page({ title }) {
    const dispatch = useDispatch();

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

                    <PageBotton link={'/page-1'} title={'Page_1'} children={
                        <>
                            <WorkIcon alt='work-icon' className={classes.iconStyles} />
                        </>
                    } />
                    <PageBotton link={'/page-2'} title={'Page_2'} children={
                        <>
                            <DonutSmallIcon alt="donut-icon" className={classes.iconStyles} />
                        </>
                    } />
                    <PageBotton link={'/page-3'} title={'Page_3'} children={
                        <>
                            <GroupIcon alt="group-icon" className={classes.iconStyles} />
                        </>
                    } />

                </section>
                <section className={classes.pageMenuSection}>
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
                </section>
            </Box>
            <h1 className={classes.textPage}>{`${title}`}</h1>
        </Box>
    );
}

export default Page