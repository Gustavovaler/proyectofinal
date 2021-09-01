import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import Detail from './components/Detail';

function App() {
  
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/detail/:id">
          <Detail></Detail>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
