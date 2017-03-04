import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rawijsApp from './redux/reducers';
import serviceWorker from './serviceWorker/serviceWorkerInit';
let store = createStore(rawijsApp);

injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);