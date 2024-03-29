import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import Search from '../home/search.js'
import Top from '../home/top.js'
import Popular from '../home/popular.js'
import Genre from '../home/genre.js'

import AnimePage from '../animePage'

const App = () => (
  <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/anime/:id" component={AnimePage} />
      <Route exact path="/top" component={Top} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/genre/:name" component={Genre} />
      <Route exact path="/search/:query" component={Search} />
  </div>
)

export default App
