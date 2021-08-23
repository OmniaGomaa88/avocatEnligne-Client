import { useState, React } from "react";
import "./style/mesRendezVous.scss";
import "../components/style/form.scss"


const MesRendezVous = (props) => {
  const [clicked, setClicked] = useState(null);
  const handleClick=(tabName)=>{
    if(clicked==null){
     setClicked(tabName)
    }else{
      setClicked(null)
    }
  
  }

  return (
    <div>
      <div className="rendezVousContainer">
        <div className={props.className}
        onClick={(event) => handleClick('clicked')}
        >
          <p>
            <strong>Date</strong>
            {props.date} {props.heure}
          </p>
        </div>
        <div className={(clicked === 'clicked') ?"rendezVous":"hide"}>
          <div className="Infos">
            <p>
              {" "}
              <strong >{props.infosTitle}</strong>
            </p>
            <p>
              {" "}
            <a href={props.herf}>
              {props.Prenom} {props.Nom}{" "}
              </a>
            </p>
            <p>
              {" "}
              <strong> Adresse:</strong>{props.Adress} 
            </p>
            <p>
              {" "}
              <strong>Email</strong> {props.Email}
            </p>
            <p>
              {" "}
              <strong>Telephone</strong> {props.Telephone}
            </p>
            <div className="situation">
            <p>
              {" "}
              <strong> Situation</strong> {props.client_situation}
            </p>
           
          </div>
          </div>
        
        </div>
      </div>
      
    </div>
  );
};
export default MesRendezVous;
