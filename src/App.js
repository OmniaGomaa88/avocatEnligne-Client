import "./assets/App.scss";
import Enregistre from "./Pages/inscription/enregistre";
import Login from "./Pages/login/login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/sigup" component={Enregistre} />
          <Route exact path="/Login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
