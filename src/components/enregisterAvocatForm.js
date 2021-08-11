import React, { useState, useEffect } from "react";
import avocatService from "../services/Avocat";
import villeService from "../services/ville";
import specialitService from "../services/Specialite";
import Male_Lawyer_Img from "../assets/imges/online-avocat.jpeg";
import "./style/form.scss";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import LocationCity from "@material-ui/icons/LocationCity";
import Description from "@material-ui/icons/Description";
import Work from "@material-ui/icons/Work";
import Euro from "@material-ui/icons/Euro";
import AddAPhoto from "@material-ui/icons/AddAPhoto";



const EnregistreForm = (props) => {
  const classHidde = props.className;
  const [vills, setVills] = useState([]);
  const [specialits, setSpecialits] = useState([]);
  const [error, setError] = useState(false);
  const [state, setState] = useState({
    prenom: "",
    nom: "",
    Email: "",
    Password: "",
    Telephone: 0,
    Adress: "",
    Ville: "",
    Presentation: "",
    Specialite: "",
    Honorare: 0,
    image: "",
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
    const Ville = state.Ville;
    const Presentation = state.Presentation;
    const Specialite = state.Specialite;
    const Honorare = state.Honorare;
    const image = state.image;
    try {
      const addNewAvocat = await avocatService.addNewAvocat(
        prenom,
        nom,
        Email,
        Password,
        Telephone,
        Adress,
        Ville,
        Presentation,
        Specialite,
        Honorare,
        image
      );
      console.log("addNewAvocat post", addNewAvocat);
    } catch (error) {
      setError(error);
    }
  };


  console.log(error);

  // fnction to get all ville
  const getVills = async () => {
    try {
      const villsData = await villeService.getAll();
      setVills(villsData.data.result);
      console.log(vills);
    } catch (error) {
      console.log(error);
    }
  };
  // fnction to get all specialits
  const getspecialits = async () => {
    try {
      const specialitdata = await specialitService.getAll();
      setSpecialits(specialitdata.data.result);
      console.log(specialits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVills();
  }, []);
  useEffect(() => {
    getspecialits();
  }, []);

  return (
    <div className={classHidde}>
      <div className="Formcontainer">
     
        <div className="form">
        <img src={Male_Lawyer_Img} alt="male lawyer " className="FormImg" />

          <div className="row">
            <div>
              <Person></Person>
              <lable>prenom *</lable>
              <input name="prenom" onChange={handleChange} />
            </div>
            <div>
              <Person></Person>
              <lable>Nom *</lable>
              <input name="nom" onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div>
              <Email></Email>
              <lable>Email * </lable>
              <input name="Email" onChange={handleChange} />
            </div>
            <div>
              <Lock></Lock>
              <lable>Password *</lable>
              <input name="Password" onChange={handleChange} />
            </div>
          </div>
          <div className="column">
            <div>
              <Phone></Phone>
              <label> Téléphone</label>
              <input name="Telephone" onChange={handleChange} />
            </div>
            <div>
              <LocationOnone></LocationOnone>
              <lable>Adress *</lable>
              <input name="Adress" onChange={handleChange} />
            </div>
            <div>
              <LocationCity></LocationCity>
              <lable> Ville</lable>
              <select name="Ville" className="select" onChange={handleChange}>
                <option value="Choisissez votre ville *">
                Sélectionnez votre ville
                </option>
                {vills.map((ville, index) => (
                  <option key={index} value={ville.nom}>
                    {ville.nom}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="column">
            <div>
              <Description></Description>
              <lable> Presentation *</lable>
              <textarea classname="Presentation" name="Presentation" onChange={handleChange} />
            </div>
            <div>
             <Work></Work>
              <lable>Specialite </lable>
              <select
                className="select"
                name="Specialite"
                onChange={handleChange}
              >
                <option value="Choisissez votre Spécialité">
                Sélectionnez votre Spécialité
                </option>
                {specialits.map((specialit, index) => (
                  <option key={index} value={specialit.nom}>
                    {specialit.nom}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Euro></Euro>
              <lable>Honoraire *</lable>
              <input name="Honorare" onChange={handleChange} />
            </div>
          </div>
          <div className="column">
          <div className="image">
            <div>
              <AddAPhoto></AddAPhoto>
              <lable> Image * </lable>
              <input name="image" type="file" onChange={handleChange} />
            </div>
          </div>
          <button onClick={(event) => handleClick(event)} className="subBtn">
            Enregistre
          </button>
          <a className="connixion"
        href="/Login"
        >J'ai déja un compt</a>
        </div>
          </div>
         
        
      </div>
    </div>
  );
};
export default EnregistreForm;
