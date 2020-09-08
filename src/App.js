import React from 'react';
//import PartnerProfile from './components/partner/PartnerProfile';
import HomePartner from './components/partner/HomePartner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import Profile from './components/userProfile/Profile';
//import PartnerProfile from './components/partnerProfile/PartnerProfileBren';
import SlikNormal from './components/slikNormal/SlikNormal';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import Register from './components/login/Register';
import Store from './components/store/Store';
import Barro from './components/store/Barro';

function App() {

  return (


    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Switch>
          <Route exact path='/parnerr'>
            <HomePartner />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/admin'>
            <Admin />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/store'>
            <Store />
          </Route>

          <Route path='/art'>
            <Barro />
          </Route>

          <Route exact path='/'>
            <SlikNormal />
          </Route>

          {/* <Route path='/partner'>
            <PartnerProfile />
          </Route> */}

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
