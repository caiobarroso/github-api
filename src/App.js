import React from 'react';
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {Github, Shop, Spotify} from './views'

import Nav from './components/header'
import Footer from './components/footer'

function App() {
    return (
        <div className='app'>
            <div className='content'>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Github} />
                        <Route path="/about" component={Spotify} />
                        <Route path="/shop" component={Shop} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>

    )
}

export default App