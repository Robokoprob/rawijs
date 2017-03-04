import React, { Component } from 'react';
import Article from './article/Article';
import Loading from './loading/Loading';

import componentStyles from'./content.scss';
import globalStyles from 'global/global.scss';

class Content extends Component {

    render() {
        const articleItems = this.props.loading ? null : this.props.articles.map((article) =>
            <Article key={article.id} data={article} />
        );

        return (
            <main className={componentStyles.content}>
                <Loading loading={this.props.loading}/>
                {articleItems}
            </main>
        )
    }

}

export default Content;