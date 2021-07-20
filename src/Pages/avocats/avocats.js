import React from "react";
import { Link } from "react-router-dom";
import AvoatCarte from '../../components/avocatCart'
import './avocats.scss'
const Avocats = (props) => {
  const data = JSON.parse(localStorage.getItem("avocats"));
  const ville = localStorage.getItem("ville");
  const Specialite = localStorage.getItem("Specialite");
  console.log(Specialite);

 
  console.log(ville);


  return (
    <div className="avocatsContainer">
      <h2> les avocat de Spécialité :{Specialite} dans la ville : <span>{ville}</span></h2>
      {data.map((avocat,index) =>{
        return(
        <AvoatCarte
        index={index}
        prenom= {avocat.Prénom}
        nom={avocat.Nom}
        adress={avocat.Adress}
        link={"/avocat/"+avocat.id}
        ></AvoatCarte>
        )
      })}
      
       
    </div>
  );
};

export default Avocats;
