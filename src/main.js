import React from 'react';
import {render} from 'react-dom';
import App from './app/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import csaApp from './redux/reducers';
import {Router, Route, IndexRoute, IndexLink, Link, browserHistory} from 'react-router';
import Articles from './app/content/articles/Articles';
import NotFound from './app/content/notfound/NotFound';
import Home from './app/content/home/Home';

const store = createStore(csaApp);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path='articles' component={Articles}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);