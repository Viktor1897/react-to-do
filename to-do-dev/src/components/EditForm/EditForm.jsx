import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/styles';
import EditFormInput from './EditFormInput';
import { editPostTitle, editPostDescription, cleanInputs, setAlertState } from '../../redux/actionCreators'
import updatePost from '../../services/posts/updatePost.api';
import Alert from '../Alert/Alert';

const useStyles = makeStyles({
  content: {
      display: "flex",
      flexDirection: "column"
  }
});

  export default function EditForm({ id, title, description}) {

    const { content } = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    
    const handleOpen = () => {
      setOpen(true);
      dispatch(editPostTitle(title));
      dispatch(editPostDescription(description));
    };
  
    const handleClose = () => {
      setOpen(false);
      dispatch(cleanInputs());
    };

    const handleTitleChange = (e) => {
      dispatch(editPostTitle(e.target.value));
    }
    const handleDescriptionChange = (e) => {
      dispatch(editPostDescription(e.target.value));
    }
    
    const editedPost = useSelector(state => state.todo.editedPost);

    const isFormValid = ({title, description}) => {
      return !!(title.trim() && description.trim())
  }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!isFormValid(editedPost)) {
        dispatch(setAlertState(true));
        return
      }
      updatePost(editedPost, id)
      dispatch(cleanInputs());
      handleClose();
    }

    return (
      <div>
        <IconButton color="primary" aria-label="update" component="span" onClick={handleOpen}>
          <EditIcon/>
        </IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Изменить запись</DialogTitle>
          <DialogContent>
            <form className={content} id="post-edit-form" autoComplete="off">
              <EditFormInput onChange={handleTitleChange} value={editedPost.title} label="Задача"/>
              <EditFormInput onChange={handleDescriptionChange} value={editedPost.description} label="Описание"/>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            <Button type="submit" form="post-edit-form" onClick={handleFormSubmit} color="primary">
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
        <Alert message="Заполните, пожалуйста, все поля." status="warning"/>
      </div>
    );
  }
  