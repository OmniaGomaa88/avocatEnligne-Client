import React from "react";
import { useEffect, useState } from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import "./style/header.scss";
import profilePhoto from "../assets/imges/profileAvatar.jpg";
import avocatService from "../services/Avocat";
import { Link } from "react-router-dom";
import './style/avocatCart.scss'

const AvoatCarte = (props) => {
 



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
       <div className="disponible">
<table className="fl-table">
    <thead>
    <tr>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
        </tr>
    </thead>
    <tbody>
    <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
        </tr>
        <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
        </tr>
        <tr>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
        </tr>
    </tbody>
</table>
           
       </div>

      </div>
    
    </div>
  );
};

export default AvoatCarte;