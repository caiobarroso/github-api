import React from 'react';
import './styles/App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {Home, About, Shop} from './views'

import Nav from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div className='app'>
            <div className='content'>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/shop" component={Shop} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>

    )
}

export default App