import { createStore } from 'redux';
import rawijsApp from './reducers';
let store = createStore(rawijsApp);

import { openDrawer } from './actionCreators'

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(openDrawer(true));

// Stop listening to state updates
unsubscribe();