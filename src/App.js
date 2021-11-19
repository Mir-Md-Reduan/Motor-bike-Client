import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';

import Home from './Pages/Home/Home/Home';
import MyOrder from './Pages/Home/My Order/MyOrder';
import NotFound from './Pages/Home/NotFound/NotFound';
import Header from './Pages/Home/Shared/Header/Header';
import LoginAndRegister from './Pages/Home/Shared/Login/LoginAndRegister/LoginAndRegister';
import PrivateRoute from './Pages/Home/Shared/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking/Booking'
import Explore from './Pages/Home/Explore/Explore';
import DashBoard from './Pages/Home/Home/DashBoard/DashBoard/DashBoard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/explore'>
              <Explore></Explore>
            </Route>
            <Route exact path='/login'>
              <LoginAndRegister></LoginAndRegister>
            </Route>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute exact path='/booking/:bookingId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
