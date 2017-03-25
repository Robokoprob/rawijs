import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import './app.scss';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Content loading={false} children={this.props.children}/>
                <Footer />
            </div>
        )
    }
}

export default App;