import { useState, React } from "react";
import "./style/RNDForm.scss";
import rendezVousService from "../services/rendes_Vous";

const RendezVousForm = (props) => {
  const [client_situation, setSituation] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const hendelClick = async () => {
    try {
      let avocatId = props.avocatId;
      let response = await rendezVousService.addRendezVous(
        client_situation,
        date,
        avocatId
       
      );
    } catch (error) {
      setError(error);
    }
      window.alert("votre redez-vous est bien enrgesré");
    
  };
  return (
    <div>
    <div className="rendezVousForm">
      <div className="RDVContainer">
        <div>
         
          <div className="situation">
            <p className="RNDText"> Votre situation</p>
            <textarea
              className
              onChange={(e) => setSituation(e.target.value)}
            ></textarea>
          </div>
          <div className="dispo">
           
            <div className="date">
              <p className="RNDText">Date</p>
              <input 
                   placeholder="Anne/Mois/Jour"
              onChange={(e) => setDate(e.target.value)}></input>
            </div>
          </div>
        
          <button className="RDVBtn" onClick={() => hendelClick()}>
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default RendezVousForm;
