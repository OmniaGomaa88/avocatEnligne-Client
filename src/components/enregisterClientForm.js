import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import clientService from "../services/client";

const ClientEnregistreForm = (props) => {
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
export default ClientEnregistreForm;
