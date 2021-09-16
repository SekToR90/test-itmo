import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';


import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { fetchUsers } from '../../../actions/actions';
import classes from '../MainAuthorization.module.scss';


const MainAuthorizationForm = () => {
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const dispatch = useDispatch();

    function handleEmailChange(evt) {
      setEmailIsValid(evt.target.validationMessage ? false : true);
      setEmailErrorMessage(evt.target.validationMessage);
    }
  

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    function buttonSingIn() {
        dispatch(fetchUsers())
    }

    const [state, setState] = useState({
        checkedG: true,
    });

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

    return (
        <>
            <h2 className={classNames(classes.subtitle)}>Sign In</h2>
            <form id="formSignIn" className={classNames(classes.form)}>
                <input type="email" name="email" placeholder="Email*" className={classNames(classes.input)} required onChange={handleEmailChange}></input>
                <span id="urlAvatar-error" className={classes.spanError}>
                    {emailErrorMessage}
                </span>
                <input type="password" name="password" placeholder="Password*" autoComplete="off" className={classNames(classes.input)} required onChange={handlePasswordChange}></input>
                <span className={classes.spanError} id="urlAvatar-error">
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
    );
};

export default MainAuthorizationForm