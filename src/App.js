import './App.css';
import Body from './components/Body/Body';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import Login from './components/LogIn/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/body">
            <Body></Body>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/">
            <Body></Body>
          </Route>
        </Switch>
      </Router>





    </div>
  );
}

export default App;
