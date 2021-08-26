const initialState = { username: '', password: ''}

export default function creds(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_LOGIN': {
            return {...state, username: action.value}
        }
        case 'INPUT_PASSWORD': {
            return {...state, password: action.value}
        }
        default: 
            return state;
    }
}