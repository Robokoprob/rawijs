import { combineReducers } from 'redux';
import ArticlesReducer from './reducer-articles';

const allReducers = combineReducers({
    articles: ArticlesReducer
});

export default allReducers;