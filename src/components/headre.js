import React from "react";
import { useEffect, useState } from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import "./style/header.scss";
import headerImg from "../assets/imges/hEADER.png";
import avocatService from "../services/Avocat";
import {Link} from 'react-router-dom'

const Header = (props) => {
  const [ville, setVille] = useState("");
  const [Specialite, setSpecialite] = useState("");
  const handleClick = async (e) => {
    let response = await avocatService.getAll(ville, Specialite);
    let data = response.data;
    localStorage.setItem('avocats', JSON.stringify(data));
    // data = JSON.parse(localStorage.getItem('avocats'));
    console.log(data);

  //  props.history.push('/avocats');
  };

  return (
    <header>
      <div className="nav">
        <nav>
          <ul className="navBar">
            <li className="navBarItem">
              <a>Connexion</a>
            </li>
            <li className="navBarItem">
              <a>Enregistre</a>
            </li>
          </ul>
        </nav>
        <nav className="navSocial">
          <span>Suivez nous </span>
          <Facebook></Facebook>
          <Instagram></Instagram>
          <Twitter></Twitter>
        </nav>
      </div>
      <div
        className="backGround"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="Seacrcher">
          <input
            className="SearchBar"
            onChange={(e) => setVille(e.target.value)}
          />
          <input
            className="SearchBar"
            onChange={(e) => setSpecialite(e.target.value)}
          />
          <button className="btnSub" onClick={e=> handleClick(e)}>
            <Link to="/avocats">Search</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
