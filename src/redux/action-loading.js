import { SET_LOADING, CLOSE_LOADING } from './actionTypes';

export const setLoadingMethod = (name, loading) => {
    return {
        type: SET_LOADING,
        payload: {
            name: name,
            loading: loading
        }
    }
};

export const closeLoadingMethod = () => {
    return {
        type: CLOSE_LOADING,
        payload: true
    }
};