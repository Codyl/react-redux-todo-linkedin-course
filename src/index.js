import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store.js';
import App from './App.js';
console.log('test')
const appRoot = (
    <Provider store={configureStore()}>
        <App/>
    </Provider>
)
ReactDOM.render(appRoot, document.getElementById('root'));