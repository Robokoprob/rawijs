import { createArticleMethod, setArticlesMethod } from './action-articles';
import { setLoadingMethod } from './action-loading';

export default {
    createArticle: createArticleMethod,
    setArticles: setArticlesMethod,
    setLoading: setLoadingMethod
};

export const createArticle = createArticleMethod;
export const setArticles = setArticlesMethod;
export const setLoading = setLoadingMethod;