import React from "react";
import "./style/header.scss"
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import PersonAddOutlined from "@material-ui/icons/PersonAddOutlined";
import Home from "@material-ui/icons/Home";

// import { useHistory } from "react-router-dom";

const NavBar = (props) => {
    const token = localStorage.getItem("token");
   
    // element compt vers compt page si l'utilisteur est connécté  et connixion page si l'utilisteur n'est pas connecté
    let connectElment = token ? (
      <a href={`/compt`} className="navBarItem">
        <AccountCircleOutlined></AccountCircleOutlined>
        <p> Profil</p>
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
        window.location.reload();
      };

  return (
    <nav>
     
    <ul className="navBar">
    
    <div className="navItems">

    <li  className="navBarItem">
      <Home></Home>
      <a href="/">
       <p>Accueil</p> </a></li>
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