import React from "react";
import { useState } from "react";
import { matchPath } from "react-router";

import RendezVousForm from "../../components/rendezVousForm"
const RendeVous = (props) => {
  const id = props.match.params.id;
  console.log("avocat id is",id)
  const clientId= localStorage.getItem("userId");
  
    return (
      <div>
    
    <RendezVousForm avocatId={id} clientId={clientId} ></RendezVousForm>
    </div>
    )
  
  

 
};

export default RendeVous;
