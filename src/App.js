import { createContext, useState } from 'react';
import './App.css';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import Login from './components/LogIn/Login';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const UserContext = createContext([]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className='App'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name :{loggedInUser.name}</p>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/body">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
