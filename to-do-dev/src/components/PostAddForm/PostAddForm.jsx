import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import createPost from '../../services/posts/createPost.api';
import { inputPostDescription, inputPostTitle, cleanInputs, setAlertState } from '../../redux/actionCreators'
import Alert from '../Alert/Alert';


const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column"
    },
    formInput: {
        marginBottom: "1rem"
    }
});

export default function PostAddForm() {

    const { form, formInput } = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {newPost} = useSelector(state => state.todo);

    const handleTitleChange = (e) => {
        dispatch(inputPostTitle(e.target.value));
    }
    const handleDescriptionChange = (e) => {
        dispatch(inputPostDescription(e.target.value));
    }

    const isFormValid = ({title, description}) => {
        return !!(title.trim() && description.trim())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid(newPost)) {
            dispatch(setAlertState(true));
            return
        }
        createPost(newPost, history);
        dispatch(cleanInputs());
    }

    return (
        <form className={form} onSubmit={handleSubmit} autoComplete="off">
            <TextField value={newPost.title} onChange={handleTitleChange} className={formInput} label="Задача" variant="outlined" />
            <TextField value={newPost.description} onChange={handleDescriptionChange} className={formInput} label="Описание" variant="outlined" />
            <SubmitButton/>
            <Alert message="Заполните, пожалуйста, все поля." status="warning"/>
        </form>
    )
}