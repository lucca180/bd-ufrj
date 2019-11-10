import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
  </div>
)

export default App
