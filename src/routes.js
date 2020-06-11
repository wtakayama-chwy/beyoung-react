import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Importando Páginas
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;