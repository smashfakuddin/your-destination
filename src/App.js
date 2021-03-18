import './App.css';
import Body from './components/Body/Body';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import Login from './components/LogIn/Login';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      {/* <Body></Body> */}
      {/* <Login></Login> */}
      <Destination></Destination>
    </div>
  );
}

export default App;
