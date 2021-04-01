import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Deals from "./components/Deals/Deals";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/product/:_id">
            <ProductDetails />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <AdminPanel />
          </PrivateRoute>

          <Route path="/deals">
            <Deals />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
