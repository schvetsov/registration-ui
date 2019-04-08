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
        case "firstName":
            return Object.assign({}, state, {
                firstName: action.value
            })
        case "lastName":
            return Object.assign({}, state, {
                lastName: action.value
            })
        case "npi":
            return Object.assign({}, state, {
                npi: action.value
            })
        case "address1":
            return Object.assign({}, state, {
                address1: action.value
            })
        case "address2":
            return Object.assign({}, state, {
                address2: action.value
            })
        case "city":
            return Object.assign({}, state, {
                city: action.value
            })
        case "homeState":
            return Object.assign({}, state, {
                homeState: action.value
            })
        case "zip":
            return Object.assign({}, state, {
                zip: action.value
            })
        case "phone":
            return Object.assign({}, state, {
                phone: action.value
            })
        case "email":
            return Object.assign({}, state, {
                email: action.value
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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
// // import 'bootstrap/dist/js/bootstrap';
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// serviceWorker.unregister();
 