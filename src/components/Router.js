import React from 'react'
import App from './App'
import NotFound from './NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Restaurant from './Restaurant'

const Router = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/restaurant/:restaurantId' component={Restaurant} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router