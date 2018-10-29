import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-table/react-table.css'
import * as serviceWorker from './serviceWorker'
import 'react-widgets/dist/css/react-widgets.css';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './configureStore'

import App from './modules/app/App'
import 'react-toastify/dist/ReactToastify.css';

import $ from 'jquery';
window.jQuery = window.$ = $;

require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
