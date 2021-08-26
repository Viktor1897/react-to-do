import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AuthorizationFormInput from './AuthorizationFormInput';
import AuthorizationFormButton from './AuthorizationFormButton';
import getToken from '../../services/auth/getToken.api';
import { inputLogin, inputPassword } from '../../redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column"
    },
    paper: {
        padding: "2rem"
    }
});

export default function AuthorizationForm () {

    const { form, paper } = useStyles();
    const history = useHistory();
    const creds = useSelector(state => state.creds);
    const dispatch = useDispatch();

    const handleChangeLogin = (e) => {
        dispatch(inputLogin(e.target.value));
    }
    const handleChangePassword = (e) => {
        dispatch(inputPassword(e.target.value));
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        getToken(history, creds);
    }

    return (
        <Paper className={paper}>
            <form className={form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <AuthorizationFormInput onChange={handleChangeLogin} icon={<AccountCircle/>} label="Логин"/>
                <AuthorizationFormInput onChange={handleChangePassword} icon={<LockIcon/>} label="Пароль" type="password"/>
                <AuthorizationFormButton/>
            </form>
        </Paper>
    )
}