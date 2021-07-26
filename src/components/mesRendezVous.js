import { useState, React } from "react";
import "./style/mesRendezVous.scss";

const MesRendezVous = (props) => {
 

  return (  
      <div>
        <div className="rendezVousContainer">
          <div className="rendezVousHeader">
            <p >
              <strong>date</strong>  
              {props.date}
            </p>
          </div>
          <div className="rendezVous">
              <div className="Infos">
              <p> <strong>{props.infosTitle}</strong></p>
              <p> <strong> Prénom:</strong>{props.Prenom} <strong> Nom:</strong> {props.Nom} </p>
              <p> <strong>Email</strong> {props.Email}</p>
              <p> <strong>Telephone</strong> {props.Telephone}</p>
              </div>
           <div className="situation">
           <p> <strong> Situation</strong> {props.client_situation}</p>
           </div>
              
          </div>
        </div>;
        </div>
     
  )
  
};
export default MesRendezVous;
