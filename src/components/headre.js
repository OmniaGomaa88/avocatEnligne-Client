import React from "react";
import { useEffect, useState } from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import "./style/header.scss";
import headerImg from "../assets/imges/hEADER.png";
import avocatService from "../services/Avocat";
import { Link } from "react-router-dom";
import villeService from "../services/ville";
import specialitService from "../services/Specialite";
const Header = (props) => {
  const [ville, setVille] = useState("");
  const [Specialite, setSpecialite] = useState("");
  const [vills, setVills] = useState([]);
  const [specialits, setSpecialits] = useState([]);
  const handleClick = async (e) => {
    let response = await avocatService.getAll(ville, Specialite);
    let data = response.data;
    localStorage.setItem("avocats", JSON.stringify(data));
    // data = JSON.parse(localStorage.getItem('avocats'));
    console.log(data);

    //  props.history.push('/avocats');
  };
  const getVills = async () => {
    try {
      const villsData = await villeService.getAll();
      setVills(villsData.data.result);
      
    } catch (error) {
      console.log(error);
    }
  };
  // fnction to get all specialits
  const getspecialits = async () => {
    try {
      const specialitdata = await specialitService.getAll();
      setSpecialits(specialitdata.data.result);
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVills();
  }, []);
  useEffect(() => {
    getspecialits();
  }, []);

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
          <select
            name="Ville"
            className="select"
            onChange={(e) => setVille(e.target.value)}
          >
            <option value="Choisissez votre ville *">
              Choissez votre ville
            </option>
            {vills.map((vill, index) => (
              <option key={index} value={vill.nom}>
                {vill.nom}
              </option>
            ))}
          </select>

          <select
            className="select"
            name="Specialite"
            onChange={(e) => setSpecialite(e.target.value)}
          >
            <option value="Choisissez votre Spécialité">
              Choissez votre Spécialité
            </option>
            {specialits.map((specialit, index) => (
              <option key={index} value={specialit.nom}>
                {specialit.nom}
              </option>
            ))}
          </select>
          <button className="btnSub" onClick={(e) => handleClick(e)}>
            <Link to="/avocats">Search</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
