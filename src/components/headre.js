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
    let data = response.data.result;
    // loclaStorage de le recherch
    localStorage.setItem("avocats", JSON.stringify(data));

    console.log(data);

    //  props.history.push('/avocats');
  };
  localStorage.setItem("vill", ville);
  localStorage.setItem("Specialite", Specialite);
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
              <Link to="/Login">Connexion</Link>
            </li>
            <li className="navBarItem">
              <Link to="/signup">Enregistre</Link>
            </li>
          </ul>
        </nav>
      
      </div>
      <div
        className="backGround"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="SearchBar">
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
          <Link to="/avocats" >  <button className="searchBtn" onClick={(e) => handleClick(e)}>
           Search
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
