import React from 'react';
//import PartnerProfile from './components/partner/PartnerProfile';
import HomePartner from './components/partner/HomePartner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Dashboard from './components/Dashboard';
import Admin from './components/admin/Admin';
import Profile from './components/userProfile/Profile';
import PartnerProfile from './components/partnerProfile/PartnerProfileBren';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';

/* 
function App() {

  return (
    <>
    <HomePartner/>
    /* <PartnerProfile /> */

function App() {

  return (


    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePartner />
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

          <Route path='/profile'>
            <Profile />
          </Route>


          <Route path='/partner'>
            <PartnerProfile />
          </Route>

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
