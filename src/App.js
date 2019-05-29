import React, { Component } from 'react'
import './App.css';

import Header from './components/interface/Header'
import List from './components/contact/List'
import APropos from './components/pages/APropos'
import {Provider} from './context'
import AddContact from './components/contact/AddContact'
import Error from './components/pages/Error'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {  }

  render () {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/ajoute" component={AddContact} />
                <Route exact path="/list" component={List} />
                <Route exact path="/" component={List} />
                <Route exact path="/apropos" component={APropos} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
