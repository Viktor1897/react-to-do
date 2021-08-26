const initialState = {
    posts: [],
    newPost: {title: '', description: ''},
    editedPost: {title: '', description: ''}
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_POSTS': {
            return {...state, posts: action.value}
        }
        case 'INPUT_POST_TITLE': {
            return {...state, newPost: {...state.newPost, title: action.value}}
        }
        case 'INPUT_POST_DESCRIPTION': {
            return {...state, newPost: {...state.newPost, description: action.value}}
        }
        case 'EDIT_POST_TITLE': {
            return {...state, editedPost: {...state.editedPost, title: action.value}}
        }
        case 'EDIT_POST_DESCRIPTION': {
            return {...state, editedPost: {...state.editedPost, description: action.value}}
        }
        case 'CLEAN_INPUTS': {
            return {...state, newPost: {title: '', description: ''}}
        }
        default: 
            return state;
    }
}