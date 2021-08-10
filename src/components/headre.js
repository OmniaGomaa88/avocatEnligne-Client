import React from "react";
import { useEffect, useState } from "react";
import "./style/header.scss";
import headerImg from "../assets/imges/hEADER.png";
import avocatService from "../services/Avocat";
import { Link } from "react-router-dom";
import villeService from "../services/ville";
import specialitService from "../services/Specialite";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import PersonAddOutlined from "@material-ui/icons/PersonAddOutlined";
import wavesImage from "../assets/imges/wave.svg"
import { useHistory } from "react-router-dom";
import LocationOnone from "@material-ui/icons/LocationOn";
import Work from "@material-ui/icons/Work";

const Header = (props) => {
  const [ville, setVille] = useState("");
  const [Specialite, setSpecialite] = useState("");
  const [vills, setVills] = useState([]);
  const [specialits, setSpecialits] = useState([]);
  const token = localStorage.getItem("token");
  let history = useHistory();
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

  const handleClick = async (e) => {
    let response = await avocatService.getAll(ville, Specialite);
    let data = response.data.result;
    localStorage.setItem("avocats", JSON.stringify(data));
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
  const logout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("isClient");
    localStorage.removeItem("isAvocat");
    history.push("/");
  };
  useEffect(() => {
    getVills();
  }, []);
  useEffect(() => {
    getspecialits();
  }, []);

  return (
    <header>
      <nav>
        <ul className="navBar">
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
        </ul>
      </nav>

      <div
        className="backGround"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(232,232,232, 
          0.534), rgba(180,160,122, 0.6),rgba(240,214,165, 0.6)),url(${headerImg}) `,
        }}
      >
        <div className="HeaderText">
          <h1>Avocat enligne</h1>
          <p>Trouvez un avoca partout en France, par domaine de compétence
          </p>
         
        </div>
        <div className="SearchBar">
      
          <select
            name="Ville"
            className="select"
            onChange={(e) => setVille(e.target.value)}
          >
            <option value="Choisissez votre ville *">
              Sélectionnez une ville
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
            Sélectionnez une Spécialité
            </option>
            {specialits.map((specialit, index) => (
              <option key={index} value={specialit.nom}>
                {specialit.nom}
              </option>
            ))}
          </select>
          <Link to="/avocats">
            {" "}
            <button className="searchBtn" onClick={(e) => handleClick(e)}>
              Search
            </button>
          </Link>
        </div>
<img src={wavesImage} className="wave"></img>
      </div>
    </header>
  );
};

export default Header;
