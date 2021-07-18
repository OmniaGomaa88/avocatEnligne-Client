import "./assets/App.scss";
import Enregistre from "./Pages/inscription/enregistre";
import Login from "./Pages/login/login"
import Header from "./components/headre"
import Avocats from './Pages/avocats/avocats'
import AvocatProfile from "./Pages/avocatProfile/avocatProfile"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
        
          <Route exact path="/signup" component={Enregistre} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/avocats" component={Avocats}/>
          <Route exact path="/avocat/:id" component={AvocatProfile}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
