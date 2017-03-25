import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Article from './article/Article';
import { createArticle, setArticles } from 'redux/actions'

import componentStyles from'./articles.scss';
import globalStyles from 'global/global.scss';

class Articles extends Component {

    renderArticles() {
        if (this.props.articles && this.props.articles.length > 0) {
            return this.renderArticleList();
        } else {
            return this.renderNoArticles();
        }
    }

    renderArticleList() {
        return this.props.articles.map((article, index) => {
            return <Article key={index} data={article} />
        });
    }

    renderNoArticles() {
        return (<h2>No Articles</h2>)
    }

    addArticle() {
        return <button onClick={() => this.props.createArticle()}>Add Article</button>
    }

    forceRefresh() {
        return <button onClick={() => this.fetchArticles({headers: new Headers({"X-Force-Fetch":true})})}>Refresh from server</button>
    }

    fetchArticles(init) {
        fetch("/data/articles.json", init)
            .then(response => response.json())
            .then(json => {
                this.props.setArticles(json.articles);
            }).catch(error => {
            console.error(error);
        });
    }

    // React methods

    componentDidMount() {
        this.fetchArticles();
    }

    render() {
        return (<div>
            {this.renderArticles()}
            {this.addArticle()}
            {this.forceRefresh()}
        </div>);
    }
}


function mapStateToProps(state, ownProps = {}) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createArticle: createArticle,
        setArticles: setArticles
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);