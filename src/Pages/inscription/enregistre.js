import React from "react";
import EnregistreForm from "../../components/enregisterAvocatForm";
import ClientEnregistreForm from "../../components/enregisterClientForm";
import { useRef, useEffect, useState, useContext } from "react";
import Male_Lawyer_Reading_Img from "../../assets/imges/Male_Lawyer_Reading .png";
import "../../components/style/form.scss"
import "./enregistre.scss";
const Enregistre = (props) => {
  const [clicked, setClicked] = useState("Avocat");
  const handleClick = (tabName) => {
 
      setClicked(tabName);
   
  };

  return (
    <div className="container">
      <div className="Form">
        <ul className="Buttons">
          <li>
          <a  onClick={() => handleClick("Avocat")} className={clicked == "Avocat" ? "clicked" : "ButtonDefult"}> Avocat</a>
          </li>
          <li>
          <a  onClick={() => handleClick("Client")} className={clicked == "Client" ? "clicked" : "ButtonDefult"}> Client</a>
          </li>
        </ul>
        <h1>
        Inscription
        </h1>
        <div className="Forms">
        <EnregistreForm className="show"  className={clicked == "Avocat" ? "show" : "hidden"} />
        <ClientEnregistreForm className={clicked == "Client" ? "show" : "hidden"} />
        </div>
        <div />
      </div>
    
    </div>
  );
};

export default Enregistre;
