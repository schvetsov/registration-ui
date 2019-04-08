import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    firstName: '',
    lastName: '',
    npi: '',
    address1: '',
    address2: '',
    city: '',
    homeState: '',
    zip: '',
    phone: '',
    email: ''
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGEINPUT':
            return Object.assign({}, state, {
                [action.value.name]: action.value.newVal
            })
        default:
            return state;
    }
}

const store = createStore(reducer);

const App2 = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<App2 />, document.getElementById('root'));

serviceWorker.unregister();
