import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import rendezVousService from "../services/rendes_Vous";
import clientService from "../services/client";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import avocatImgProfile from "../assets/imges/profileAvatar.jpg";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import Euro from "@material-ui/icons/Euro";
import MesRendezVous from "../components/mesRendezVous"
// import "../../components/style/avocatCart.scss";
// import "./avocatProfile.scss";
 import DisponibleTable from "../components/disponibleTable";
const ClientCompt = (props) => {
  const [error, setError] = useState(false);
  const [rendezVous, setRendezVous] = useState([]);
  const [clientData, setClietnData] = useState([]);
 

  const getClientRedezVous = async (props) => {
    try {
      const rendezVousData = await rendezVousService.getClientRedezVous();
      setRendezVous(rendezVousData.data.result);
    } catch (error) {
      setError(true);
    }
  };
  const getClientData = async (props) => {
    try {
      const clientData = await clientService.getrUserData();
      setClietnData(clientData.data.result[0]);
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
  console.log(rendezVous);
  console.log(clientData);

  return (
    <div className="avocatContainer">
      <div className="avocatBack"></div>
      <div className="avocatProfileContainer">
        <div className="presAndDis">
          <div className="presentation">
            <div className="ContactCosial">
              Partager sur :
              <Facebook className="icon" />
              <Instagram className="icon" />
              <Twitter className="icon" />
            </div>
            <div className="photoAndInfo">
              <img src={avocatImgProfile} className="RountGrand"></img>

              <div className="infos">
                <p>
                  <strong>
                    {clientData.Prénom} {clientData.Nom}
                  </strong>{" "}
                </p>
                <p>
                  <LocationOnone></LocationOnone>
                  {clientData.Adress}
                </p>
                <p className="presText">{clientData.Presentation}</p>
                <p className="horaire">
                  {" "}
                  <strong>Honoraire:</strong> {clientData.Honorare}
                  <Euro></Euro>
                </p>
              </div>
            </div>
            <h4>___________________________Contacts_______________________</h4>
            <div className="contact">
              <div>
                <p>
                  <strong>
                    <Phone></Phone>
                    Telephone:
                  </strong>{" "}
                  {clientData.Telephone}
                </p>
                <p>
                  <strong>
                    <Email></Email>
                    Email:{" "}
                  </strong>
                  {clientData.Email}
                </p>
              </div>
            </div>
            <div className="Disponibilité">
              <h4>__________________Disponibilité___________________</h4>
              <DisponibleTable></DisponibleTable>
            </div>
          </div>
        </div>
        <div className="Aside">
          <h1> vos Rendez-vous</h1>
          {rendezVous.map((item, index) => {
            return (
              <MesRendezVous
                infosTitle="Avocat Information"
                date={item.date.toString()}
                Prenom={item.Prénom}
                Nom={item.Nom}
                Email={item.Email}
                Telephone={item.Telephone}
                client_situation={item.client_situation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientCompt;
