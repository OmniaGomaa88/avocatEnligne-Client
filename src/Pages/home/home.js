import React from "react";
import searchIcon from "../../assets/imges/search.png";
import ProfilsIcon from "../../assets/imges/Profils.png";
import RendezVousIcon from "../../assets/imges/RendezVous.png";
import MaleLawyerReading from "../../assets/imges/maleLawyer.png";
import avocatServices from "../../assets/imges/avocatService.jpg";
import tÉMONAGE1 from "../../assets/imges/tÉMONAGE1.jpg";
import témoinage2 from "../../assets/imges/témoinage2.jpg";
import témoniage3 from "../../assets/imges/témoniage3.jpg";
import tÉMONAGE4 from "../../assets/imges/tÉMONAGE4.jpeg";
import "./home.scss";
import avocatImgProfile from "../../assets/imges/profileAvatar.jpg";
import avocatService from "../../services/Avocat";
import Header from "../../components/headre"
import { useEffect, useState } from "react";

const Home = (props) => {
  const [nouveauxAvocats, setNouveauxAvocats] = useState([]);
  // fonction pour afficher les nouveux avocats
  const getAvocat = async () => {
    try {
      const response = await avocatService.nouvexAvocat();
      setNouveauxAvocats(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAvocat();
  }, []);
  console.log(nouveauxAvocats);
  return (
    <div className="Home">
      <Header></Header>
      <div className="servicesContainer">
        <h2>Comment ça marche?</h2>
        <figure className="services">
          <div className="Service">
            <img
              src={searchIcon}
              alt="search Icon"
              className="servicesIconsStyle"
            ></img>
            <h3>Rechercher un avocat par spécialité et ville</h3>
          </div>
          <div className="Service">
            <img
              src={ProfilsIcon}
              alt="Profils Icon"
              className="servicesIconsStyle"
            ></img>
            <h3>Choisissez le bon avocat pour vous</h3>
          </div>
          <div className="Service">
            <img
              src={RendezVousIcon}
              alt="RendezVous Icon"
              className="servicesIconsStyle"
            ></img>
            <h3>Prenez un rendez-vous</h3>
          </div>
        </figure>
      </div>
      <div className="clientServicesContainer">
        <h2 className="clientServiceTitle">
          Pourquoi faire appel à un avocat?
        </h2>
        <img src={MaleLawyerReading}></img>
        <div className="clientServiceTexte">
          <p>
            Que vous soyez un particulier ou un entrepreneur, les avocats sont
            vos interlocuteurs les plus efficaces pour vous informer, vous
            conseiller et vous défendre. Le recours à l'avocat, c'est la
            garantie de la fiabilité et de la sécurité juridique, en toute
            confidentialité et déontologie, à des conditions de coût
            accessibles.
          </p>
          <a href={"/signup"}>
            <button className="createClientBtn"> Créez votre compte</button>
          </a>
        </div>
      </div>
      <div className="avocatServicesContainer">
        <div className="avocatServiceTexte">
          <h2>Vous êtes un avocat ?</h2>
          <p>
            Équipez-vous du logiciel AvocatEnlign pour gagner en confort de
            travail.{" "}
          </p>
          <p> Libérez du temps grâce à la prise de rendez-vous en ligne</p>
          <p>
            {" "}
            Développez l'activité de votre cabinet selon vos besoins grâce à une
            meilleure visibilité en ligne
          </p>
          <p>
            Gagnez en confort de travail au quotidien en réduisant les appels
            téléphoniques à votre cabinet
          </p>
          <a href={"/signup"}>
            <button className="createAvocatBtn">
              {" "}
              Créez votre avocat profile
            </button>
          </a>
        </div>
        <img src={avocatServices}></img>
      </div>
      <div className="temoignesContainer">
        <h1>Témoignages</h1>
        <div className="temoingnes">
          <div className="temoingne">
            <img src={tÉMONAGE1}></img>
            <p className="quote">
              <span className="info">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
              <span className="more">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </span>
            </p>
          </div>
          <div className="temoingne">
            <img src={témoinage2}></img>
            <p className="quote">
              <span className="info">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
              <span className="more">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </span>
            </p>
          </div>
          <div className="temoingne">
            <img src={témoniage3}></img>
            <p className="quote">
              <span className="info">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
              <span className="more">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </span>
            </p>
          </div>
          <div className="temoingne">
            <img src={tÉMONAGE4}></img>
            <p className="quote">
              <span className="info">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
              <span className="more">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="nouveuxAvocatsContainer">
        <h1> Nouveaux avocats sur le site</h1>
       
     <div className="nouveuxAvocats" >
        {nouveauxAvocats.map((avocat,index) => {
          return (
           
            <div className="nouveuxAvocat">
               <a href={"/avocat/"+avocat.id}>
              <img src={avocatImgProfile}></img>
              </a>
              <p>
                  <strong>
                    {avocat.Prénom} {avocat.Nom}
                  </strong>{" "}
                </p>
               
              
               
            </div>
            
          );
        })}
        </div>
       
      </div>
    </div>
  );
};

export default Home;
