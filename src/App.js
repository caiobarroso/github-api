import React from 'react';
import './styles/App.css'

import Nav from './containers/Nav'
import About from './containers/About'
import Home from './containers/Home'
import Shop from './containers/Shop'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className='App'>
               <Nav/>
               <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                </Switch>
            </div>
        </Router>
       
    )
}

export default App