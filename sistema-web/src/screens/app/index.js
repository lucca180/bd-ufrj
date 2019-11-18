import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import AnimePage from '../animePage'

const App = () => (
  <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/anime" component={AnimePage} />
  </div>
)

export default App
