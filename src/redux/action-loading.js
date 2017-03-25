import { SET_LOADING } from './actionTypes';

export const setLoadingMethod = (name, loading) => {
    return {
        type: SET_LOADING,
        payload: {
            name: name,
            loading: loading
        }
    }
};