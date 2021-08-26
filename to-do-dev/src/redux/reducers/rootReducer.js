import { combineReducers } from 'redux';
import todo from './todo';  
import creds from './creds';
import app from './app';

export default combineReducers({
    creds,
    todo,
    app
});