import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rawijsApp from './redux/reducers';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router';
import Articles from './app/content/articles/Articles';
import NotFound from './app/content/notfound/NotFound';
import Home from './app/content/home/Home';

let store = createStore(rawijsApp);

injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory} >
                <Route path="/"  component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='articles' component={Articles} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);