/**
 * My first action.
 */
interface Action {
    type: string;
    payload?: any;
}

/**
 * My first reducer.
 * The reducer always must return an state.
 */
function reducer( state = 10, action: Action ) {
    if (action.type === 'INCREMENT') {
        return state += 1;
    }
    
    return state;
}

// Using the reducer
const incrementatorAction: Action = {
    type: 'INCREMENT'
}

console.log(reducer(10, incrementatorAction));