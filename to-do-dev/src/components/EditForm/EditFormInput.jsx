import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    input: {
        width: "400px"
    }
});

export default function EditFormInput ({label, value, onChange}) {
    const { input } = useStyles();
    return (
            <TextField
              onChange={onChange}
              className={input}
              value={value}
              margin="dense"
              id="title"
              label={label}
              type="text"
              variant="outlined"
            />
    )
}