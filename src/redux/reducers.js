import { combineReducers } from 'redux';
import ArticlesReducer from './reducer-articles';
import LoadingReducer from './reducer-loading';

const allReducers = combineReducers({
    articles: ArticlesReducer,
    loading: LoadingReducer
});

export default allReducers;