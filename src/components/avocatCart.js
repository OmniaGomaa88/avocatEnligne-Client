import React from "react";
import { useEffect, useState } from "react";
import "./style/header.scss";
import profilePhoto from "../assets/imges/profilePicture.png";
import { Link } from "react-router-dom";
import './style/avocatCart.scss'
import DisponibleTable from "../components/disponibleTable"
import LocationOnone from "@material-ui/icons/LocationOn";

const AvocatCarte = (props) => {
 



  return (
    <div>
      <div className="avocatCart">
       <div className="info">
           <div className="nameAndPhoto">
           <img src={profilePhoto} className="RountGrand"/>
               <p>{props.prenom} {props.nom}</p>
              
           </div>
           <div className="AdressAndRendezVous">
             <div className="AvocatCartAdress">
           <LocationOnone></LocationOnone>
               <p>{props.adress}</p>
               </div>
               <Link to={props.link}>
               <button className="RDVBtn">Voir le profile </button>
                   </Link>  
              
           </div>

       </div>
       <div className="Disponibilité">
       <h4>Disponibilité</h4>
<DisponibleTable width="100%"></DisponibleTable>
</div>
      </div>
    
    </div>
  );
};

export default AvocatCarte;