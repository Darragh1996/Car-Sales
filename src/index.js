import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as reducers from './state/reducers';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';

const monsterReducer = combineReducers({
    count: reducers.countReducer,
    add: reducers.addFeature,
})
const store = createStore(monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
