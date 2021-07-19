import React from "react";
import { Link } from "react-router-dom";
import AvoatCarte from '../../components/avocatCart'

const Avocats = (props) => {
  const data = JSON.parse(localStorage.getItem("avocats"));
  console.log(data);

  return (
    <div>
      <p>you are in avocats page</p>
      {data.map((avocat,index) =>{
        return(
        <AvoatCarte
        prenom= {avocat.Prénom}
        nom={avocat.Nom}
        adress={avocat.Adress}
        link={"/avocat/"+data.id}
        ></AvoatCarte>
        )
      })}
      
       
    </div>
  );
};

export default Avocats;
