import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';


import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import classes from './MainAuthorization.module.css';
import Main from '../Main/Main';
import { fetchUsers } from '../../actions/actions';
import homeImage from '../../images/home-image.svg';
import logoutImg from '../../images/logout-img.svg';
import { CANSEL_AUTH } from '../../actions/actions';


function MainAuthorization() {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const loading = useSelector((state) => state.users.loading);
  const isAuth = useSelector((state) => state.users.isAuth);
  const user = useSelector((state) => state.users.user);
  const hasErrors = useSelector((state) => state.users.hasErrors);
  const dispatch = useDispatch();

  function handleEmailChange(evt) {
    setEmailIsValid(evt.target.validationMessage ? false : true);
    setEmailErrorMessage(evt.target.validationMessage);
  }

  function handlePasswordChange(evt) {
    setPasswordIsValid(evt.target.validationMessage ? false : true);
    setPasswordErrorMessage(evt.target.validationMessage);
  }

  const GreenCheckbox = withStyles({
    root: {
      color: '#0298A9',
      '&$checked': {
        color: '#0298A9',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [state, setState] = useState({
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function buttonSingIn() {
    dispatch(fetchUsers())
  }
  
  function buttonLogout() {
    dispatch({ type: CANSEL_AUTH }) // поправить
  }

  const userData = <>
    <Box className={classes.userBox}>
      <img src={homeImage} alt='homeImage' className={classes.homeImage} />
      <Box className={classes.aboutBox}>
        <h3 className={classes.userName}>{user?.name}/{user?.id}</h3>
        <a href className={classes.loadingImg} onClick={buttonLogout}><img src={logoutImg} alt='logoutImg' /> Logout</a>
      </Box>
    </Box>

  </>

  const form = <>
    <h2 className={classNames(classes.subtitle)}>Sign In</h2>
    <form id="formSignIn" className={classNames(classes.form)}>
      <input type="email" name="email" placeholder="Email*" className={classNames(classes.input)} required onChange={handleEmailChange}></input>
      <span id="urlAvatar-error" className={classes.spanError}>
            {emailErrorMessage}
          </span>
      <input type="password" name="password" placeholder="Password*" autoComplete="off" className={classNames(classes.input)} required  onChange={handlePasswordChange}></input>
      <span  className={classes.spanError} id="urlAvatar-error">
            {passwordErrorMessage}
          </span>
      <Button size="small" className={classNames(classes.buttonForgotPassword)}>Forgot password?</Button>
      <Button variant="contained" className={classNames(classes.buttonSignIn)} onClick={buttonSingIn} disableElevation disabled={!emailIsValid || !passwordIsValid}>Sign In</Button>
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

export default MainAuthorization
