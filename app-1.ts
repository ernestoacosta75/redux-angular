/**
 * My first action.
 * An action is just an interface.
 */
interface Action {
    type: string;
    payload?: any;
}

/**
 * My first reducer.
 * The reducer always must return an state.
 * Basically, it's a switch with all the actions
 * that it can operate.
 */
function reducer( state = 10, action: Action ) {
    switch( action.type ) {
        case 'INCREMENT':
            return state +=1;
            break;

        case 'DECREMENT':
            return state -=1;
            break;   
            
        case 'MULTIPLY':
            return state * action.payload;
            break;
              
        case 'DIVIDE':
            return action.payload !== 0 ? state / action.payload : state; 
            break;

        default:
            return state;
            break;    
    }
}

// Using the reducer
const incrementAction: Action = {
    type: 'INCREMENT'
}

const decrementAction: Action = {
    type: 'DECREMENT'
}

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2 
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2 
}

console.log(reducer(10, incrementAction));

console.log(reducer(10, decrementAction));

console.log(reducer(10, multiplyAction));

console.log(reducer(10, divideAction));