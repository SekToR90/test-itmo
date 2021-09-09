import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import classes from './MainAuthorization.module.css';
import Main from '../Main/Main';
import classNames from 'classnames';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/actions'
import homeImage from '../../images/home-image.svg'
import logoutImg from '../../images/logout-img.svg'

function MainAuthorization({ dispatch, isAuth, loading, user, hasErrors }) {

  const GreenCheckbox = withStyles({
    root: {
      color: '#0298A9',
      '&$checked': {
        color: '#0298A9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [state, setState] = React.useState({
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function buttonSingIn() {
    dispatch(fetchUsers())
  }

  const userData = <>
    <Box className={classes.userBox}>
      <img src={homeImage} alt='homeImage' className={classes.homeImage} />
      <Box className={classes.aboutBox}>
        <h3 className={classes.userName}>{user?.name}/{user?.id}</h3>
        <a className={classes.loadingImg}><img src={logoutImg} alt='logoutImg' /> Logout</a>
      </Box>
    </Box>

  </>

  const form = <>
    <h2 className={classNames(classes.subtitle)}>Sign In</h2>
    <form id="formSignIn" className={classNames(classes.form)}>
      <input type="email" name="email" placeholder="Email*" className={classNames(classes.input)} required></input>
      <input type="password" name="password" placeholder="Password*" autoComplete="off" className={classNames(classes.input)} required></input>
      <Button size="small" className={classNames(classes.buttonForgotPassword)}>Forgot password?</Button>
      <Button variant="contained" className={classNames(classes.buttonSignIn)} onClick={buttonSingIn} disableElevation>Sign In</Button>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Remember password"
      />
    </form>
  </>

  const renderUsers = () => {
    if (loading) return <p>Loading users...</p>
    if (hasErrors) return <p>Unable to display users.</p>
    return !isAuth ? form : userData
  }

  return (
    <Main children={
      renderUsers()
    } />
  );
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  isAuth: state.users.isAuth,
  user: state.users.user,
  hasErrors: state.users.hasErrors,
})

export default connect(mapStateToProps)(MainAuthorization)
