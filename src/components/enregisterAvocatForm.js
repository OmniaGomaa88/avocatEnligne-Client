import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import avocatService from "../services/Avocat";
import villeService from "../services/ville";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const EnregistreForm = (props) => {
  const nodeRef = React.useRef(null);
  const [vills,setVills]=useState([])
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
  const getVills=async()=>{
    try{
    const   villsData = await villeService.getAll()
    setVills(villsData.data.result)
      console.log(vills)
    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    getVills()
  }, []);

  return (
    <div>
      <div>
        <div>
          <TextField label="prenom" name="prenom" onChange={handleChange} />
          <br />
          <TextField label="nom" name="nom" onChange={handleChange} />
          <TextField label="Email" name="Email" onChange={handleChange} />
          <TextField label="Password" name="Password" onChange={handleChange} />
          <TextField
            label="Telephone"
            name="Telephone"
            onChange={handleChange}
          />
          <TextField label="Adress" name="Adress" onChange={handleChange} />
          {/* <TextField label="Ville" onChange={handleChange} /> */}
          <select name="Ville" onChange={handleChange} >
            <option value="Choissez votre ville">
            Choissez votre ville
            </option>
          {vills.map((ville,index) => (
            <option key={index} value={ville.nom} >
             {ville.nom}
             </option>
          ))}
       </select>

          <TextField
            label="Presentation"
            name="Presentation"
            onChange={handleChange}
          />
          <TextField
            label="Specialite"
            name="Specialite"
            onChange={handleChange}
          />
          <TextField label="Honorare" name="Honorare" onChange={handleChange} />
          <TextField label="image" name="image" onChange={handleChange} />
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={(event) => handleClick(event)}
          >
            Enregistre
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EnregistreForm;
