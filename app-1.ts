import * as action from './counter/counter.actions';
import * as basicReducer from './app-2';

// Using the reducer
console.log(basicReducer.reducer(10, action.incrementAction));

console.log(basicReducer.reducer(10, action.decrementAction));

console.log(basicReducer.reducer(10, action.multiplyAction));

console.log(basicReducer.reducer(10, action.divideAction));

console.log(basicReducer.reducer(10, action.resetAction));