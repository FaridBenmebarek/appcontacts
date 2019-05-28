import React, { Component } from 'react'
import './App.css';

import Header from './components/Header'
import List from './components/List'

class App extends Component {
  state = {  }

  render () {
    return (
      <div className="App">
        <Header />
        <div className="container">
         <List />
        </div>
      </div>
    )
  }
}

export default App
