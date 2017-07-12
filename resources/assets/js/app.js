import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'

import Navbar from './components/navbar/Navbar'
import reducers from './reducers/index'

import Home from 'js/scenes/home/Home'

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
