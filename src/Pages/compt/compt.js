import React from "react";
import ClientCompt from "../../components/clientCompt";
import AvocatCompt from "../../components/avocatCompt";
import "./compt.scss";
const Compt = (props) => {
  var isClient = localStorage.getItem("isClient");
  // const isClient = localStorage.getItem("isClient")
  console.log(isClient);
  if (isClient == "true") {
    console.log("yes");
    return <ClientCompt></ClientCompt>;
  } else {
    console.log("no");
    return (
      <div>
        <AvocatCompt></AvocatCompt>
      </div>
    );
  }
};

export default Compt;
