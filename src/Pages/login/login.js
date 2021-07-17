import React from "react";
import LoginForm from "../../components/loginForm";
import { useRef, useEffect, useState, useContext } from "react";
import "../../components/style/form.scss"
import "../../Pages/inscription/enregistre.scss";
import client_avec_avocat_Img from "../../assets/imges/clientEnrigster.jpg"
import Male_Lawyer_Img from "../../assets/imges/online-avocat.jpeg";

const Login = (props) => {
  const [clicked, setClicked] = useState("Avocat");
  const handleClick = (tabName) => {
 
      setClicked(tabName);
   
  };

  return (
    <div className="container">
     
      <div className="Form">
      <h1>
        Connexion
        </h1>
        <ul className="Buttons">
          <li>
          <a  onClick={() => handleClick("Avocat")} className={clicked == "Avocat" ? "clicked" : "ButtonDefult"}> Avocat</a>
          </li>
          <li>
          <a  onClick={() => handleClick("Client")} className={clicked == "Client" ? "clicked" : "ButtonDefult"}> Client</a>
          </li>
        </ul>
      
        <div className="Forms">
        <LoginForm formImage={ Male_Lawyer_Img} className="show"  className={clicked == "Avocat" ? "show" : "hidden"} />
        <LoginForm formImage={client_avec_avocat_Img} className={clicked == "Client" ? "show" : "hidden"} />
        </div>
        <div />
      </div>
    
    </div>
  );
};

export default Login;