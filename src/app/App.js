import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem >Menu Item</MenuItem>
                    <MenuItem >Menu Item 2</MenuItem>
                </Drawer>
                <h1>Main title</h1>
                <p>Some content</p>
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
                <Footer />
            </div>
        )
    }
}

export default App;