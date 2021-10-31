import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddUser from './components/AddUser/AddUser';
import Services from './components/Services/Services';
import ShowServices from './components/ShowServices/ShowServices';
import UpdateService from './components/UpdateService/UpdateService';
import AboutServices from './components/AboutServices/AboutServices';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
import MyOrders from './components/MyOrders/MyOrders';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
            <Services></Services>
            <AboutServices></AboutServices>
            <Footer></Footer>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
            <Services></Services>
            <AboutServices></AboutServices>
            <Footer></Footer>
          </Route>

          <Route exact path='/showServices'>
            <ShowServices></ShowServices>
            <Footer></Footer>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
            <Footer></Footer>
          </Route>

          <PrivateRoute exact path='/details/show/:id'>
            <Details></Details>
            <Footer></Footer>
          </PrivateRoute>

          <Route exact path='/adduser'>
            <AddUser></AddUser>
            <Footer></Footer>
          </Route>

          <Route exact path='/services/update/:id'>
            <UpdateService></UpdateService>
          </Route>

          <Route exact path='/myorders/show/:id'>
            <MyOrders></MyOrders>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>

        </Switch>
      </Router>
      </AuthProvider> 
    </div>
  );
}

export default App;
