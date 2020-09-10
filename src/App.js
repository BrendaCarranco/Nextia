import React from 'react';
//import PartnerProfile from './components/partner/PartnerProfile';
import HomePartner from './components/partner/HomePartner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import Profile from './components/userProfile/Profile';
import SlikNormal from './components/slikNormal/SlikNormal';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import Register from './components/login/Register';
import Store from './components/store/Store';
import Arts from './components/store/Arts';
import Producer from './components/store/Producer';
import PurchaseDetail from './components/purchaseDetail/PurchaseDetail';
import FinalizeOrder from './components/finalizeOrder/FinalizeOrder';
import SuccessPurchase from './components/payment/SuccessPurchase';
import HelpNav from './components/navbarUser/HelpNav';

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

          <Route path='/producer'>
            <Producer />
          </Route>

          <Route path='/art'>
            <Arts />
          </Route>

          <Route path='/help'>
            <HelpNav />
          </Route>

          <Route path='/purchase'>
            <PurchaseDetail />
          </Route>

          <Route path='/resume'>
            <FinalizeOrder />
          </Route>

          <Route path='/success'>
            <SuccessPurchase />
          </Route>

          <Route exact path='/'>
            <SlikNormal />
          </Route>

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
