import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    inputContainer: {
        display: "flex",
        alignItems: "flex-end",
        marginBottom: "0.5rem"
    },
    input: {
        marginLeft: "10px"
    }
});

export default function AuthorizationFormInput ({icon, label, value, type="text", onChange}) {
    const { inputContainer, input } = useStyles();
    return (
        <div className={inputContainer}>
            {icon}
            <TextField onChange={onChange} className={input} label={label} value={value} type={type} fullWidth/>
        </div>
    )
}