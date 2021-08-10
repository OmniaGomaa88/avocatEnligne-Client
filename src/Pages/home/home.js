import React from "react";
import searchIcon from "../../assets/imges/search.png"
import ProfilsIcon from "../../assets/imges/Profils.png"
import RendezVousIcon from "../../assets/imges/RendezVous.png"
import "./home.scss";
const Home = (props) => {
  return (
    <div className="Home">
      <div className="servicesContainer">
        <h2>Comment ça marche?</h2>
        <figure className="services">
          <div className="Service">
            <img src={searchIcon} alt="search Icon" className="servicesIconsStyle"></img>
            <h3>Rechercher un avocat par spécialité et ville</h3>
            </div>
            <div className="Service">
            <img src={ProfilsIcon} alt="Profils Icon" className="servicesIconsStyle"></img>
            <h3>Choisissez le bon avocat pour vous</h3>
            </div>
            <div className="Service">
            <img src={RendezVousIcon} alt="RendezVous Icon" className="servicesIconsStyle"></img>
            <h3>Prenez un rendez-vous</h3>
            </div>
        </figure>
      </div>
      <div className="clientServicesContainer"></div>
      <div className="avocatServicesContainer"></div>
      <div className="temoignContainer"></div>
      <div className="nouveuxAvocatsContainer"></div>
    </div>
  );
};

export default Home;
