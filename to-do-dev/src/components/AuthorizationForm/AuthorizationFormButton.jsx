import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        marginTop: "1rem"
    }
  });

export default function AuthorizationFormButton() {
    const { button } = useStyles();
    return (
        <Button className={button} type="submit" variant="contained" color="primary">Войти</Button>
    )
}