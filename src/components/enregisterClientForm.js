import React, { useState } from "react";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clientService from "../services/client";
import "./style/form.scss";
import client_avec_avocat_Img from "../assets/imges/unnamed.png";
const ClientEnregistreForm = (props) => {
  const classHiden = props.className;
  const [error, setError] = useState(false);
  const [errorMessage,setErrorMessage]=useState("");
  const [visibleClecked, setVisibleClecked] = useState("");
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
    if(prenom == " "||nom == ""||Email == ""||Password == ""){
      setError(true)
      setErrorMessage("Veuillez remplir les informations manquantes")
    }
    else{ try {
      const addNewClient = await clientService.addNewClient(
        prenom,
        nom,
        Email,
        Password,
        Telephone,
        Adress
      );
      console.log("addNewClient post", addNewClient);
      window.location.reload()
    } catch (error) {
      setError(error);
      if (error.response && error.response.data) {
        setError(true)
        setErrorMessage(error.response.data.message)
     }
    }}

   
   
  };
  console.log(error);
  // function for visability of password
  const VisibleHandler=(visibleName)=>{
    setVisibleClecked(visibleName);
    
   }
  // visabiltyImage
  let visabiltyImage=""
   if(visibleClecked=="Visibility"){
    visabiltyImage=<VisibilityOff
    className="visibilitéIcon"
    onClick={(event) => VisibleHandler("VisibilityOff")}
    ></VisibilityOff>
  }else{
    visabiltyImage=<Visibility
    className="visibilitéIcon"
    onClick={(event) => VisibleHandler("Visibility")}
    ></Visibility>
  }
 

  return (
    <div className={classHiden}>
      <div className="Formcontainer">
      <h3 className="error"> {errorMessage} </h3> 
        <img
          src={client_avec_avocat_Img}
          alt="male lawyer reading Book"
          className="FormImg"
        />
        <div className="form">
          <div className="row">
            <div>
              <Person></Person>
              <lable>prenom *</lable>
              <input
                name="prenom"
                placeholder="Prénome"
                onChange={handleChange}
              />
            </div>
            <div>
              <Person></Person>
              <lable>Nom *</lable>
              <input name="nom" onChange={handleChange} placeholder="Nom" />
            </div>
          </div>
          <div className="row">
            <div>
              <Email></Email>
              <lable>Email * </lable>
              <input name="Email" onChange={handleChange} placeholder="Email" />
            </div>
            <div className="passWordInput">
              <Lock></Lock>
              <lable>Password *</lable>
              {visabiltyImage}
               
             
               <input
                 name="Password"
                 onChange={handleChange}
                 placeholder="********"
                 type={visibleClecked=="Visibility" ? "text" : "password"}
               />
            </div>
          </div>
          <div className="column">
            <div>
              <Phone></Phone>
              <label> Téléphone</label>
              <input
                name="Telephone"
                onChange={handleChange}
                placeholder="Téléphone"
              />
            </div>
            <div>
              <LocationOnone></LocationOnone>
              <lable>Adress *</lable>
              <input name="Adress" onChange={handleChange}
                 placeholder="Adress"
              />
            </div>
            <div className="subBtns">
            <a >
              <button
                onClick={(event) => handleClick(event)}
                className="subBtn"
              >
                Enregistre
              </button>
              </a>
              <a href="/Login">
                <button className="subBtn">Se connecter</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientEnregistreForm;
