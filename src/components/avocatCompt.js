import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import rendezVousService from "../services/rendes_Vous";
import avocatService from "../services/Avocat";
import avocatImgProfile from "../assets/imges/profileAvatar.jpg";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import Euro from "@material-ui/icons/Euro";
import "../Pages/compt/compt.scss";
import MesRendezVous from "../components/mesRendezVous";

import DisponibleTable from "../components/disponibleTable";
const AvocatCompt = (props) => {
  const [error, setError] = useState("");
  const [rendezVous, setRendezVous] = useState([]);
  const [avocatData, setAvocatData] = useState([]);
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [presentation, setPresentation] = useState("");
  const [telephone, setTelphone] = useState(0);
  const [horaire, setHoraire] = useState(0);

  const handleClick = async (event) => {
    const Email = email;
    const Adress = adress;
    const Presentation = presentation;

    try {
      let response = await avocatService.updateData(
        Email,
        Adress,
        Presentation
      );
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const getAvocatRendezVous = async (props) => {
    try {
      const rendeVousData = await rendezVousService.getAvocatRedezVous();
      setRendezVous(rendeVousData.data.result);
    } catch (error) {
      setError(error);
    }
  };
  const getAvocatData = async (props) => {
    try {
      const avocatData = await avocatService.getrUserData();
      setAvocatData(avocatData.data.result[0]);
      setEmail(avocatData.data.result[0].Email);
      setAdress(avocatData.data.result[0].Adress);
      setPresentation(avocatData.data.result[0].Presentation);
      setTelphone(avocatData.data.result[0].Telephone);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getAvocatRendezVous();
  }, []);



  useEffect(() => {
    getAvocatData();
  }, []);
  return (
    <div>
      <div></div>
      <div>
        <div>
          <div>
            <div>
              <img src={avocatImgProfile} className="RountGrand"></img>

              <div>
                <p>
                  <strong>
                    {avocatData.Prénom} {avocatData.Nom}
                  </strong>{" "}
                </p>
                <p>
                  <LocationOnone></LocationOnone>
                  <input
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </p>
                <textarea
                  value={presentation}
                  onChange={(e) => setPresentation(e.target.value)}
                />
                <p>
                  <button onClick={(event) => handleClick(event)}>
                    Enregistre
                  </button>
                  <strong>Honoraire:</strong>
                  <Euro></Euro>
                  <input
                    value={horaire}
                    onChange={(e) => setHoraire(e.target.value)}
                  />
                </p>
              </div>
            </div>

            <div>
              <div>
                <p>
                  <strong>Telephone:</strong>
                  <Phone></Phone>
                  <input
                    value={avocatData.Telephone}
                    onChange={(e) => setTelphone(e.target.value)}
                  />
                </p>
                <p>
                  <strong>Email: </strong>
                  <Email></Email>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Aside">
          <h1> vos Rendez-vous</h1>
          {rendezVous.map((item, index) => {
            return (
              <MesRendezVous
                infosTitle="Client Information"
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

export default AvocatCompt;
