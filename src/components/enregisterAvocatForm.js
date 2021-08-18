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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import lawyerOnline from "../assets/imges/lawyerOnline.jpg";

const EnregistreForm = (props) => {
  const classHidde = props.className;
  const [vills, setVills] = useState([]);
  const [specialits, setSpecialits] = useState([]);
  const [NextClicked, SetNextClicked] = useState(false);
  const [visibleClecked, setVisibleClecked] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
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
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  // function pof henadelChange image
  const fileSelctHandler = (event) => {
    setImageFile(event.target.files[0].name);
  };
  //

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
    const image = imageFile;
    if (
      prenom == " " ||
      nom == "" ||
      Email == "" ||
      Password == "" ||
      Ville == "" ||
      Specialite == ""
    ) {
      setError(true);
      setErrorMessage("Veuillez remplir les informations manquantes");
    } else {
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
      } catch (error) {
        if (error.response && error.response.data) {
          setError(true);
          setErrorMessage(error.response.data.message);
        }
      }
    }
  };

  console.log(error);

  // fnction to get all ville
  const getVills = async () => {
    try {
      const villsData = await villeService.getAll();
      setVills(villsData.data.result);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(true);
        setErrorMessage(error.response.data.message);
      }
    }
  };
  // fnction to get all specialits
  const getspecialits = async () => {
    try {
      const specialitdata = await specialitService.getAll();
      setSpecialits(specialitdata.data.result);
      console.log(specialits);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(true);
        setErrorMessage(error.response.data.message);
      }
    }
  };
  // .................
  // function for visability of password
  const VisibleHandler = (visibleName) => {
    setVisibleClecked(visibleName);
  };
  // visabiltyImage
  let visabiltyImage = "";
  if (visibleClecked == "Visibility") {
    visabiltyImage = (
      <VisibilityOff
        className="visibilitéIcon"
        onClick={(event) => VisibleHandler("VisibilityOff")}
      ></VisibilityOff>
    );
  } else {
    visabiltyImage = (
      <Visibility
        className="visibilitéIcon"
        onClick={(event) => VisibleHandler("Visibility")}
      ></Visibility>
    );
  }

  useEffect(() => {
    getVills();
  }, []);
  useEffect(() => {
    getspecialits();
  }, []);

  return (
    <div className={classHidde}>
      <div className="Formcontainer">
        <h3 className="error"> {errorMessage} </h3>
        <img src={lawyerOnline} alt="male lawyer " className="FormImg" />
        <div className="form">
          <h2>Inscription</h2>

          <div className={NextClicked ? "hide " : " row"}>
            <div>
              <Person></Person>
              <lable>prenom *</lable>
              <input
                name="prenom"
                onChange={handleChange}
                placeholder="Prénome"
              />
            </div>
            <div>
              <Person></Person>
              <lable>Nom *</lable>
              <input name="nom" onChange={handleChange} placeholder="Nom" />
            </div>
          </div>
          <div className={NextClicked ? "hide " : " row"}>
            <div>
              <Email></Email>
              <lable>Email * </lable>
              <input
                name="Email"
                onChange={handleChange}
                placeholder="Email adress"
              />
            </div>
            <div className="passWordInput">
              <Lock></Lock>
              <lable>Password *</lable>
              {visabiltyImage}

              <input
                name="Password"
                onChange={handleChange}
                placeholder="********"
                type={visibleClecked == "Visibility" ? "text" : "password"}
              />
            </div>
          </div>
          <div className={NextClicked ? "hide " : " column"}>
            <div>
              <Phone></Phone>
              <label> Téléphone</label>
              <input
                name="Telephone"
                onChange={handleChange}
                placeholder="Telphone"
              />
            </div>
            <div>
              <LocationOnone></LocationOnone>
              <lable>Adress </lable>
              <input
                name="Adress"
                onChange={handleChange}
                placeholder="Adress"
              />
            </div>
            <div>
              <LocationCity></LocationCity>
              <lable> Ville</lable>
              <select
                name="Ville"
                className="selectAvocatForm"
                onChange={handleChange}
              >
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
            <button
              onClick={(event) => SetNextClicked(true)}
              className="suivantBtn"
            >
              {" "}
              Suivant
            </button>
          </div>

          <div className={NextClicked ? "column " : " hide"}>
            <div>
              <Description></Description>
              <lable> Presentation *</lable>
              <div>
                <textarea
                  classname="Presentation"
                  name="Presentation"
                  onChange={handleChange}
                  placeholder="Presentation..."
                />
              </div>
            </div>
            <div>
              <Work></Work>
              <lable>Specialite </lable>
              <select
                className="selectAvocatForm"
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
              <lable>Honoraire </lable>
              <input
                name="Honorare"
                onChange={handleChange}
                placeholder="Honoraire $"
              />
            </div>
          </div>
          <div className={NextClicked ? "column " : " hide"}>
            <div className="image">
              <div>
                <AddAPhoto></AddAPhoto>
                <lable> Image </lable>
                <input name="file" type="file" onChange={fileSelctHandler} />
              </div>
            </div>
            <button
              onClick={(event) => SetNextClicked(false)}
              className="suivantBtn"
            >
              {" "}
              Returne
            </button>

            <div className="subBtns">
              <a href={error ? "#" : "/Login"}>
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
export default EnregistreForm;
