import { CREATE_ARTICLE, SET_ARTICLES } from './actionTypes';

export default (state = [], action) => {
    if (action) {
        switch (action.type) {
            case CREATE_ARTICLE: {
                return state.concat(action.payload);
            }
        }
        switch (action.type) {
            case SET_ARTICLES: {
                return action.payload;
            }
        }
    }
    return state;
}