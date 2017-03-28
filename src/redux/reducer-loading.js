import { SET_LOADING, CLOSE_LOADING } from './actionTypes';

export default (state = {}, action) => {
    if (action) {
        switch (action.type) {
            case SET_LOADING: {
                let newState = Object.assign({}, state);

                if (action.payload.loading) {
                    newState[action.payload.name] = true;
                } else {
                    delete newState[action.payload.name];
                }

                return newState;
            }
            case CLOSE_LOADING: {
                return {};
            }
        }
    }
    return state;
}