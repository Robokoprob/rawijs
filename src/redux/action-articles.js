import { CREATE_ARTICLE, SET_ARTICLES } from './actionTypes';

export const createArticleMethod = (article) => {
    console.log("Create article");
    if (!article) {
        article = {
            "id": 4,
            "url": "article4",
            "description": "This is Test article 4"
        }
    }
    return {
        type: CREATE_ARTICLE,
        payload: article
    }
};

export const setArticlesMethod = (articles) => {
    return {
        type: SET_ARTICLES,
        payload: articles
    }
};