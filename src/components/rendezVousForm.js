import { useState, React } from "react";
import "./style/RNDForm.scss";
import rendezVousService from "../services/rendes_Vous";
const RendezVousForm = (props) => {
  const [client_situation, setSituation] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [error, setError] = useState(false);

  // handelClick for rendezVous formImage
  const hendelClick = async () => {
    try {
      let avocatId = props.avocatId;
      let response = await rendezVousService.addRendezVous(
        client_situation,
        date,
        heure,
        avocatId
      );
      console.log("hi");
      console.log(response);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="rendezVousForm">
      <div className="RDVContainer">
        <div>
          <h1 className="rendezVousFormHeader">Prenez Rendez-vous</h1>
          <div className="situation">
            <p>Votre situation</p>
            <textarea
              className
              onChange={(e) => setSituation(e.target.value)}
            ></textarea>
          </div>
          <div className="dispo">
            <p>Vos disponibilités</p>
            <div className="date">
              <p>Date</p>
              <input onChange={(e) => setDate(e.target.value)}></input>
            </div>
            <div className="heure">
              <p>Heure</p>
              <input onChange={(e) => setHeure(e.target.value)}></input>
            </div>
          </div>
          <button className="RDVBtn" onClick={() => hendelClick()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default RendezVousForm;
