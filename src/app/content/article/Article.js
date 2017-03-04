import React from 'react';
import componentStyles from'./article.scss';
import globalStyles from 'global/global.scss';

class Article extends React.Component {
    render() {
        return (
            <article className={componentStyles.mainArticle}>
                <a href={"#"+this.props.data.url}>{this.props.data.description}</a>
            </article>
        )
    }
}

export default Article;