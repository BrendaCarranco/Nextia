import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Dashboard from './components/Dashboard';
import Admin from './components/admin/Admin';

function App() {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          Somos Nextia
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/dashboard'>
          <Dashboard />
        </Route>

        <Route path='/admin'>
          <Admin />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
