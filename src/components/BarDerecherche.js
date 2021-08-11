import React from "react";
import "./style/header.scss"
import villeService from "../services/ville";
import specialitService from "../services/Specialite";
import avocatService from "../services/Avocat";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
const Recherche = (props) => {
    const [ville, setVille] = useState("");
    const [Specialite, setSpecialite] = useState("");
    const [vills, setVills] = useState([]);
    const [specialits, setSpecialits] = useState([]);
    const token = localStorage.getItem("token");
  
   
 
 
  

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
  
  useEffect(() => {
    getVills();
  }, []);
  useEffect(() => {
    getspecialits();
  }, []);
  

  return (
      <div>
    
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
  </div>
  );
};

export default Recherche;