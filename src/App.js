import "./assets/App.scss";
import Enregistre from "./Pages/inscription/enregistre";
import Home from "./Pages/home/home";
import Login from "./Pages/login/login";
import Header from "./components/headre";
import Avocats from "./Pages/avocats/avocats";
import AvocatProfile from "./Pages/avocatProfile/avocatProfile";
import RendeVous from "./Pages/rendez-vous/rendezVous";
import { hasAuthenticated } from "../src/services/Auth";
import Auth from "../src/context/Auth";
import { useState } from "react";
import AuthenticaRoute from "./components/AuthenticatRoute";
import Compt from './Pages/compt/compt'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Enregistre} />

          <Route exact path="/Login" component={Login} />
          <Route exact path="/avocats" component={Avocats} />
          <Route exact path="/avocat/:id" component={AvocatProfile} />
          <AuthenticaRoute  path="/rendezVous/:id" component={RendeVous} />
          <AuthenticaRoute  path="/compt" component={Compt} />

        </Auth.Provider>
      </Switch>
    </Router>
  );
}

export default App;
