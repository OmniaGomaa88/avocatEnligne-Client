import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import rendezVousService from "../../services/rendes_Vous";
import avocatService from "../../services/Avocat";
import clientService from "../../services/client";
import ClientCompt from "../../components/clientCompt";
import AvocatCompt from "../../components/avocatCompt";
import "./compt.scss";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import avocatImgProfile from "../../assets/imges/profileAvatar.jpg";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOnone from "@material-ui/icons/LocationOn";
import Euro from "@material-ui/icons/Euro";
import MesRendezVous from "../../components/mesRendezVous";
// import "../../components/style/avocatCart.scss";
// import "./avocatProfile.scss";
import DisponibleTable from "../../components/disponibleTable";
const Compt = (props) => {
  var isClient = localStorage.getItem('isClient'); 
// const isClient = localStorage.getItem("isClient")
console.log(isClient);
if(isClient =="true"){
  console.log("yes")
  return(
<ClientCompt></ClientCompt>
  )
 
}else{
  console.log("no")
  return(
<div>
<AvocatCompt></AvocatCompt>
  
</div>
  );
}

};

export default Compt;
