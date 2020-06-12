import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Importando Páginas
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Pedidos from './pages/Pedidos';
import Detalhes from './pages/Detalhes'

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pedidos" exact component={Pedidos} />
            <Route path="/pedidos/detalhes" exact component={Detalhes} />
            <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;