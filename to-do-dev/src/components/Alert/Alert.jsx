import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setAlertState } from '../../redux/actionCreators';

export default function Alert({message, status}) {
  
    const isOpen = useSelector(state => state.isAlertOpen);
    const dispatch = useDispatch();
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(setAlertState(false));
    };
  
    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={isOpen} autoHideDuration={3000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity={status}>
            {message}
          </MuiAlert>
        </Snackbar>
    );
  }