import React, { Component } from 'react';
import Article from './article/Article';

import componentStyles from'./articles.scss';
import globalStyles from 'global/global.scss';

class Content extends Component {

    render() {
        if (this.props.articles) {
            return this.props.articles.map((article) =>
                <Article key={article.id} data={article}/>
            );
        } else {
            return (<div>No articles found</div>);
        }
    }

}

export default Content;