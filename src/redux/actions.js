import { createArticleMethod, setArticlesMethod } from './action-articles';
import { setLoadingMethod, closeLoadingMethod } from './action-loading';

export default {
    createArticle: createArticleMethod,
    setArticles: setArticlesMethod,
    setLoading: setLoadingMethod,
    closeLoading: closeLoadingMethod
};

export const createArticle = createArticleMethod;
export const setArticles = setArticlesMethod;
export const setLoading = setLoadingMethod;
export const closeLoading = closeLoadingMethod;