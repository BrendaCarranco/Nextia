import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';


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
      </Switch>
    </BrowserRouter>


  );
}

export default App;
