import React, { useState, useEffect } from "react";

import Input from "@material-ui/core/Input";
import avocatService from "../services/Avocat";
import villeService from "../services/ville";
import specialitService from "../services/Specialite";
import Male_Lawyer_Reading_Img from "../assets/imges/Male_Lawyer_Reading .png"
import "./style/form.scss";
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

    console.log("state", state);
    console.log("ville", Ville);

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
      <div  className="Formcontainer">
      <div className="Text">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <img src={Male_Lawyer_Reading_Img} alt="male lawyer reading Book" />
      </div>
        <div className="form">
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
            <div>
              <lable> Ville</lable>
              <select name="Ville" className="select" onChange={handleChange}>
                <option value="Choisissez votre ville *">
                  Choissez votre ville
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
              <lable> Presentation *</lable>
              <textarea classname="Presentation" onChange={handleChange} />
            </div>
            <div>
              <lable>Specialite </lable>
              <select
                className="select"
                name="Specialite"
                onChange={handleChange}
              >
                <option value="Choisissez votre Spécialité">
                  Choissez votre Spécialité
                </option>
                {specialits.map((specialit, index) => (
                  <option key={index} value={specialit.nom}>
                    {specialit.nom}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <lable>Honorare *</lable>
              <input name="Honorare" onChange={handleChange} />
            </div>
          </div>
          <div className="image">
            <div>
              <lable> Image * </lable>
              <input name="image" onChange={handleChange} />
            </div>
          </div>
          <button onClick={(event) => handleClick(event)} className="subBtn">
            Enregistre
          </button>
        </div>
      </div>
    </div>
  );
};
export default EnregistreForm;
