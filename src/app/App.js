import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            articles: []
        }
    }

    componentDidMount() {
        console.log("ok componentDidMount");
        fetch("/data/test.json")
            .then(response => { return response.json(); })
            .then(json => {
                const newState = Object.assign({}, {loading: false}, json);
                this.setState(newState)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Content loading={this.state.loading} articles={this.state.articles} />
                <Footer />
            </div>
        )
    }
}

export default App;