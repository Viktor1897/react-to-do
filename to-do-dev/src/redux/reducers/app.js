const initialState = { isAlertOpen: false }

export default function app(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_ALERT': {
            return {...state, isAlertOpen: action.value}
        }
        default: 
            return state;
    }
}