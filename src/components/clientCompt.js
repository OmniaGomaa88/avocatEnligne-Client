import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import rendezVousService from "../services/rendes_Vous";
import clientService from "../services/client";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import MesRendezVous from "../components/mesRendezVous";
// import "../components/style/avocatCart.scss";
import "../Pages/compt/compt.scss";
import "./style/mesRendezVous.scss";
import NavBar from "../components/navBar";
import Recherche from "../components/BarDerecherche";
// import "./avocatProfile.scss";

const ClientCompt = (props) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [rendezVous, setRendezVous] = useState([]);
  const [clientData, setClietnData] = useState([]);
 
  const [adresse, setAdress] = useState("");
  const [Telephone, setTelphone] = useState(0);
  

  const handleClickData = async (event) => {
    const adress = adresse;
    const telephone = Telephone;

    try {
      let response = await clientService.updateData(adress, telephone);
    } catch (error) {
      setError(true);
      setErrorMessage(error.response.data.message);
    }
    window.location.reload();
  };
  const getClientRedezVous = async (props) => {
    try {
      const rendezVousData = await rendezVousService.getClientRedezVous();
      setRendezVous(rendezVousData.data.result);
    } catch (error) {
      setError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  // function pour annuler RendezVous
  

  const handleClick =  async(event) => {
    let rendezVousId = event;
    var r = window.confirm("Êtes-vous sûr de vouloir annuler le rendez-vous ?");
  if(r==true){
    try {
       await clientService.annulerRendezVous(rendezVousId);
window.location.reload()
         } catch (error) {
           setError(true);
           setErrorMessage(error.response.data.message);
         }
       };
     
  }
 
  const getClientData = async (props) => {
    try {
      const clientData = await clientService.getrUserData();
      setClietnData(clientData.data.result[0]);
      setAdress(clientData.data.result[0].Adresse);
      setTelphone(clientData.data.result[0].Telephone);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getClientRedezVous();
  }, []);
  useEffect(() => {
    getClientData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="comptContainer">
      <h3 className="error"> {errorMessage} </h3> 

        <div>
          <div>
            <div className="infos">
              <h2> Vos données</h2>
              <p>
                <strong>
                  {clientData.Prénom} {clientData.Nom}
                </strong>{" "}
              </p>
              <p>
                <LocationOnone></LocationOnone>
                <input
                  value={adresse}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </p>

              <div>
                <p>
                  <strong>
                    <Phone></Phone>
                  </strong>{" "}
                  <input
                    value={Telephone}
                    onChange={(e) => setTelphone(e.target.value)}
                  />
                </p>
                <p>
                  <strong>
                    <Email></Email>
                  </strong>
                  {clientData.Email}
                </p>
              </div>
              <button
                className="AnnulBtn"
                onClick={(event) => handleClickData(event)}
              >
                Enregistre
              </button>
            </div>
          </div>
        </div>
        <div className="Aside">
          <h2> Vos rendez-vous</h2>
          {rendezVous.map((item, index) => {
            return (
              <div>
                <MesRendezVous
                  infosTitle="Avocat Information"
                  date={item.date}
                  heure={item.heure}
                  Prenom={item.Prénom}
                  Nom={item.Nom}
                  Email={item.Email}
                  Telephone={item.Telephone}
                  client_situation={item.client_situation}
                  id={item.id}
                  className={
                    item.annulé == 0 ? "rendezVousHeader" : "annuléHeader"
                  }
                />
                <div className="annulerDiv">
                  <button
                    className={item.annulé == 0 ? "AnnulBtn" : "hide"}
                    id={item.id}
                    onClick={(event)=>handleClick(item.id)}  
                  >
                    Annuler le rendez-vous
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientCompt;
