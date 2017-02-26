import { combineReducers } from 'redux'
import { OPEN_DRAWER } from './actionTypes'

const initialDrawerState = {
    drawer: {
        isOpen: false
    }
};

function drawer(state = initialDrawerState, action) {
    switch (action.type) {
        case OPEN_DRAWER: {
            return Object.assign({}, state, {
                drawerOpen: action.open
            });
        }
        default: {
            return state;
        }
    }
}

const rawijsApp = combineReducers({
    drawer
});

export default rawijsApp;