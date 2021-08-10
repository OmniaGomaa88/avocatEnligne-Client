import React from "react";
import ClientCompt from "../../components/clientCompt";
import AvocatCompt from "../../components/avocatCompt";
import "./compt.scss";
const Compt = (props) => {
  var isClient = localStorage.getItem("isClient");
  console.log(isClient);
  if (isClient == "true") {
  
    return <ClientCompt></ClientCompt>;
  } else {
    return (
      <div>
        <AvocatCompt></AvocatCompt>
      </div>
    );
  }
};

export default Compt;
