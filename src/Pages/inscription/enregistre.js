import React from "react";
import EnregistreForm from "../../components/enregisterAvocatForm";
import ClientEnregistreForm from "../../components/enregisterClientForm";
import { useRef, useEffect, useState, useContext } from "react";
import Male_Lawyer_Reading_Img from "../../assets/imges/maleLawyer.png";
import "../../components/style/form.scss";
import "./enregistre.scss";
import NavBar from "../../components/navBar";
const Enregistre = (props) => {
  const [clicked, setClicked] = useState("Avocat");
  const handleClick = (tabName) => {
    setClicked(tabName);
  };
  // element  enregistre form pour client ou avocat selon le button qui clické
  let enregistreForm =
    clicked == "Avocat" ? (
      <EnregistreForm></EnregistreForm>
    ) : (
      <ClientEnregistreForm></ClientEnregistreForm>
    );

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <ul className="Buttons">
          <li>
            <a
              onClick={() => handleClick("Avocat")}
              className={clicked == "Avocat" ? "clicked" : "ButtonDefult"}
            >
              {" "}
              Avocat
            </a>
          </li>
          <li>
            <a
              onClick={() => handleClick("Client")}
              className={clicked == "Client" ? "clicked" : "ButtonDefult"}
            >
              {" "}
              Client
            </a>
          </li>
        </ul>
        <div className="Form">
          <div className="Forms">{enregistreForm}</div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Enregistre;
