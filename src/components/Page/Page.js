import React, {memo} from 'react';

import Box from '@material-ui/core/Box';
import WorkIcon from '@material-ui/icons/Work';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import GroupIcon from '@material-ui/icons/Group';


import classes from './Page.module.scss';
import PageBotton from './button/PageButton';
import PageMenuHeader from './menuHeader/PageMenuHeader';
import PageMenuFooter from './menuFooter/PageMenuFooter';


function Page({ title }) {

    return (
        <Box className={classes.page}>
            <Box boxShadow={3} className={classes.pageMenu}>
                <section className={classes.pageMenuSection}>
                    <PageMenuHeader />

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
                    <PageMenuFooter />
                </section>
            </Box>
            <h1 className={classes.textPage}>{`${title}`}</h1>
        </Box>
    );
}

export default memo(Page)