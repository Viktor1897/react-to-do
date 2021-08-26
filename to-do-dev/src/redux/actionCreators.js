export const inputLogin = (value) => ({type: 'INPUT_LOGIN', value});
export const inputPassword = (value) => ({type: 'INPUT_PASSWORD', value});
export const savePosts = (value) => ({type: 'SAVE_POSTS', value});
export const inputPostTitle = (value) => ({type: 'INPUT_POST_TITLE', value});
export const inputPostDescription = (value) => ({type: 'INPUT_POST_DESCRIPTION', value});
export const editPostTitle = (value) => ({type: 'EDIT_POST_TITLE', value});
export const editPostDescription = (value) => ({type: 'EDIT_POST_DESCRIPTION', value});
export const cleanInputs = () => ({type: 'CLEAN_INPUTS'});
export const setAlertState = (value) => ({type: 'TOGGLE_ALERT', value});