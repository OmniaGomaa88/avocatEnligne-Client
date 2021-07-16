import "./assets/App.scss";
import Enregistre from "./Pages/inscription/enregistre";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Enregistre} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
