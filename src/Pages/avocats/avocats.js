import React from "react";
import { Link } from "react-router-dom";

const Avocats = (props) => {
  const data = JSON.parse(localStorage.getItem("avocats"));
  console.log(data);

  return (
    <div>
      <p>you are in avocats page</p>
      <Link to={"/avocat/"+data.result[0].id}>{data.result[0].Nom}</Link> 
    </div>
  );
};

export default Avocats;
