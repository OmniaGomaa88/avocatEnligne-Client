import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import rendezVousService from "../services/rendes_Vous";
import clientService from "../services/client";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import MesRendezVous from "../components/mesRendezVous";
import "../components/style/avocatCart.scss";
import "../Pages/compt/compt.scss";
import "./style/mesRendezVous.scss";
// import "./avocatProfile.scss";

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
    <div className="comptContainer">
      <div>
        <div>
          <div className="infos">
            <p>
              <strong>
                {clientData.Prénom} {clientData.Nom}
              </strong>{" "}
            </p>
            <p>
              <LocationOnone></LocationOnone>
              <input value={clientData.Adresse} />
            </p>

            <div>
              <p>
                <strong>
                  <Phone></Phone>
                </strong>{" "}
                <input value={clientData.Telephone} />
              </p>
              <p>
                <strong>
                  <Email></Email>
                </strong>
                <input value={clientData.Email} />
              </p>
            </div>
            <button className="AnnulBtn">Enregistre</button>
          </div>
        </div>
      </div>
      <div className="Aside">
        <h2> Vos rendez-vous</h2>
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
  );
};

export default ClientCompt;
