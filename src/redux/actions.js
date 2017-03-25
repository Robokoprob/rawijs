import { createArticleMethod, setArticlesMethod } from './action-articles';

export default {
    createArticle: createArticleMethod,
    setArticles: setArticlesMethod
};

export const createArticle = createArticleMethod;
export const setArticles = setArticlesMethod;