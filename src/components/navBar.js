import React from "react";
import "./style/header.scss"
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import PersonAddOutlined from "@material-ui/icons/PersonAddOutlined";
// import { useHistory } from "react-router-dom";

const NavBar = (props) => {
    const token = localStorage.getItem("token");
   
    // element compt vers compt page si l'utilisteur est connécté  et connixion page si l'utilisteur n'est pas connecté
    let connectElment = token ? (
      <a href={`/compt`} className="navBarItem">
        <AccountCircleOutlined></AccountCircleOutlined>
        <p> Profile</p>
      </a>
    ) : (
      <a href={"/Login"} className="navBarItem">
        <LockOpenOutlined></LockOpenOutlined>
        <p>Connexion</p>
      </a>
    );
   
    const logout = (e) => {
        // let history = useHistory();
        localStorage.removeItem("token");
        localStorage.removeItem("isClient");
        localStorage.removeItem("isAvocat");
        //  history.push("/");
      };

  return (
    <nav>
     
    <ul className="navBar">
    <li className="navItems"><a href="/">Page d'accueil</a></li>
    <div className="navItems">
      <li className="navBarItem">{connectElment}</li>
      <li className={token ? "hidden" : "navBarItem"}>
        <PersonAddOutlined></PersonAddOutlined>
        <a href="/signup">
          <p> Enregistre</p>
        </a>
      </li>
      <li
        className={token ? "navBarItem" : "hidden"}
        onClick={(e) => logout(e)}
      >
        <ExitToAppOutlined></ExitToAppOutlined>
        <p className="logOut"> logOut</p>
      </li>
      </div>
    </ul>
  </nav>
  );
};

export default NavBar;