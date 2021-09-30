
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header/Header'
import Restaurants from './Restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
          <Route path="/">
            <Restaurants></Restaurants>

          </Route>
          <Route path="/home">
            <Restaurants></Restaurants>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
