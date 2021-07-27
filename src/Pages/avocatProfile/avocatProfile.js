import React from "react";
import { Link } from "react-router-dom";
import avocatService from "../../services/Avocat";
import { useEffect, useState } from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import avocatImgProfile from "../../assets/imges/profileAvatar.jpg";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import Euro from "@material-ui/icons/Euro";
import "../../components/style/avocatCart.scss";
import "./avocatProfile.scss";
import DisponibleTable from "../../components/disponibleTable";
const AvocatProfile = (props) => {
  const id = props.match.params.id;
  const [error, setError] = useState(false);
  const [avocat, setAvocat] = useState([]);
  const token= localStorage.getItem("token");
 
  // button rendezVous rediction vars rendezvous page si l'utilisteur connecté
  // et si l'utilisteur connécté en tant que client
 let rendezVousElment= token? <a href={`/rendezVous/${id}`}>
  <button className="RDVBtn"> Prenez randez-vous</button>
</a>:<a href={"/"}>
  <p className="messageConnectez"> Connectez vous pour prendre randez-vous</p></a>
  
  const getAvocatById = async (props) => {
    console.log(id);
    try {
      const avocatData = await avocatService.getById(id);
      setAvocat(avocatData.data.result[0]);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getAvocatById();
  }, []);
  console.log(avocat);
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
                    {avocat.Prénom} {avocat.Nom}
                  </strong>{" "}
                </p>
                <p>
                  <LocationOnone></LocationOnone>
                  {avocat.Adress}
                </p>
                <p className="presText">{avocat.Presentation}</p>
                <p className="horaire">
                  {" "}
                  <strong>Honoraire:</strong> {avocat.Honorare}
                  <Euro></Euro>
                </p>
              </div>
            </div>
            <h4>___________________________Contacts______________________</h4>
            <div className="contact">
              <div>
                <p>
                  <strong>
                    <Phone></Phone>
                    Telephone:
                  </strong>{" "}
                  {avocat.Telephone}
                </p>
                <p>
                  <strong>
                    <Email></Email>
                    Email:{" "}
                  </strong>
                  {avocat.Email}
                </p>
              </div>
            </div>
            {/* botton vers page rendezVous */}
          {rendezVousElment}
            <div className="Disponibilité">
              <h4>__________________Disponibilité____________________</h4>
              <DisponibleTable></DisponibleTable>
            </div>
          </div>
        </div>
        <div className="Aside">
          <div className="certificats">
            <h1>Certificats</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="Expériences">
            <h1>Expériences</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvocatProfile;
