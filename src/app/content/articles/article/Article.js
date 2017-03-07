import React from 'react';
import componentStyles from'./article.scss';
import globalStyles from 'global/global.scss';
import { Link } from 'react-router';

class Article extends React.Component {
    render() {
        return (
            <article className={componentStyles.mainArticle}>
                <Link to="/articles">{this.props.data.description}</Link>
            </article>
        )
    }
}

export default Article;