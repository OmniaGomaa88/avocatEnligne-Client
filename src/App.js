import "./assets/App.scss";
import Enregistre from "./Pages/inscription/enregistre";
import Home from "./Pages/home/home";
import Login from "./Pages/login/login";
import Avocats from "./Pages/avocats/avocats";
import AvocatProfile from "./Pages/avocatProfile/avocatProfile";
import RendeVous from "./Pages/rendez-vous/rendezVous";
import { hasAuthenticated } from "../src/services/Auth";
import { isClientRendezVous } from "../src/services/isCleint";

import Auth from "../src/context/Auth";
import isClient from "../src/context/isClient";
import { useState } from "react";
import AuthenticaRoute from "./components/AuthenticatRoute";
import IsClientRoute from "./components/isClientRout";

import Compt from "./Pages/compt/compt";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  // const [isAuthClient, setIsAuthClient] = useState(isClientRendezVous());

  return (
    <Router>
      {/* <Header></Header> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Enregistre} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/avocats" component={Avocats} />
        <Route exact path="/avocat/:id" component={AvocatProfile} />
          {/* <isClient.Provider value={{ isAuthClient, setIsAuthClient }}> */}
          <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <AuthenticaRoute path="/rendezVous/:id" component={RendeVous} />
            {/* </isClient.Provider> */}
          <AuthenticaRoute path="/compt" component={Compt} />
        </Auth.Provider>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
