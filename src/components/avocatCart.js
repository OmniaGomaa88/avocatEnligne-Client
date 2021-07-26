import React from "react";
import { useEffect, useState } from "react";
import "./style/header.scss";
import profilePhoto from "../assets/imges/profileAvatar.jpg";
import { Link } from "react-router-dom";
import './style/avocatCart.scss'
import DisponibleTable from "../components/disponibleTable"
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
               <p>{props.adress}</p>
               <Link to={props.link}>
               <button className="RDVBtn">Rendez-Vous</button>
                   </Link>  
              
           </div>

       </div>
   
<DisponibleTable width="100%"></DisponibleTable>
      </div>
    
    </div>
  );
};

export default AvocatCarte;