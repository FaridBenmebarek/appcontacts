import React, { Component } from 'react'
import './App.css';

import Header from './components/Header'
import List from './components/List'
import {Provider} from './context'

class App extends Component {
  state = {  }

  render () {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <List />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
