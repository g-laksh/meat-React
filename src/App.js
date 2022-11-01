import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Admin from './components/Admin/Admin';
import About from './pages/About/About';
import Login from './pages/login/Login';
import Recipe from './pages/Recipe/Recipe';
import Order from './pages/Order/Order';
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      {/* <Hero/> */}
      <Switch>
      <Route exact path="/"  component={Login}/>
        <Route exact path="/home"  component={Home}/>
        <Route exact path="/admin"  component={Admin}/>
        <Route exact path="/about"  component={About}/>
        <Route exact path="/recipe"  component={Recipe}/>
        <Route exact path="/order-now"  component={Order}/>
      </Switch>
    </Router>
  );
}

export default App;
