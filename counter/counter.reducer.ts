import { Action } from '../ngrx-fake/ngrx';

/**
 * My first reducer.
 * The reducer always must return an state.
 * Basically, it's a switch with all the actions
 * that it can operate.
 */
export function counterReducer( state = 10, action: Action ) {
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

        case 'RESET':
            return 0;
            break;

        default:
            return state;
            break;
    }
}
