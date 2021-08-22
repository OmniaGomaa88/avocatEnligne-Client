import React from "react";
import "./style/header.scss";
import headerImg from "../assets/imges/hEADER.png";
import { Link } from "react-router-dom";
import wavesImage from "../assets/imges/wave.svg";
import Recherche from "../components/BarDerecherche"
import NavBar from "../components/navBar"
const Header = (props) => {
  return (
    <header>
       <NavBar></NavBar>
      <div
        className="backGround"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(232,232,232, 
          0.534), rgba(180,160,122, 0.6),rgba(240,214,165, 0.6)),url(${headerImg}) `,
        }}
      >
        <div className="HeaderText">
          <h1>Avocat enligne</h1>
          <p>Trouvez un avocat partout en France, par domaine de compétence</p>
        </div>
       
        <Recherche></Recherche>
        <img src={wavesImage} className="wave"></img>
      </div>
    </header>
  );
};

export default Header;
