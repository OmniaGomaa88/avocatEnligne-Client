import React, { useState} from "react";

import clientService from "../services/client";
import "./style/form.scss";
import client_avec_avocat_Img from "../assets/imges/clientEnrigster.jpg"
const ClientEnregistreForm = (props) => {
  const classHiden = props.className
  const [error, setError] = useState(false);
  const [state, setState] = useState({
    prenom: "",
    nom: "",
    Email: "",
    Password: "",
    Telephone: 0,
    Adress: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleClick = async (event) => {
    const prenom = state.prenom;
    const nom = state.nom;
    const Email = state.Email;
    const Password = state.Password;
    const Telephone = state.Telephone;
    const Adress = state.Adress;
    console.log("state", state);

    try {
      const addNewClient = await clientService.addNewClient(
        prenom,
        nom,
        Email,
        Password,
        Telephone,
        Adress
      );
      console.log("addNewClient post", addNewClient);
    } catch (error) {
      setError(error);
    }
  };
  console.log(error);

  return (
    <div className={classHiden}>
      <div   className="Formcontainer">
     
        <div className="form" >
        <img src={client_avec_avocat_Img} alt="male lawyer reading Book" className="FormImg" />

        <div className="row">
            <div>
              <lable>prenom *</lable>
              <input name="prenom" onChange={handleChange} />
            </div>
            <div>
              <lable>Nom *</lable>
              <input name="nom" onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div>
              <lable>Email * </lable>
              <input name="Email" onChange={handleChange} />
            </div>
            <div>
              <lable>Password *</lable>
              <input name="Password" onChange={handleChange} />
            </div>
          </div>
          <div className="column">
            <div>
              <label> Téléphone</label>
              <input name="Telephone" onChange={handleChange} />
            </div>
            <div>
              <lable>Adress *</lable>
              <input name="Adress" onChange={handleChange} />
            </div>
            <button onClick={(event) => handleClick(event)} className="subBtn">
            Enregistre
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ClientEnregistreForm;
