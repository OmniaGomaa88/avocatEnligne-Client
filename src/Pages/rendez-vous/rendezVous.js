import React from "react";
import { useState } from "react";
import { matchPath } from "react-router";
import RendezVousForm from "../../components/rendezVousForm";
const RendeVous = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <RendezVousForm avocatId={id}></RendezVousForm>
    </div>
  );
};

export default RendeVous;
