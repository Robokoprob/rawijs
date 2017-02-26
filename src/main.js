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

console.log(store.getState());
injectTapEventPlugin();
fetch("/mocks/test.json", {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'text/json'
        })
    }).then(response => { return response.json(); })
    .then(json => {
        console.log(json);
    });

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);