import { useState, React } from "react";
import "./style/form.scss";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleClecked, setVisibleClecked] = useState("");

  const [error, setError] = useState(false);
  
  const hendelClick = async (e) => {
    try {
      let response = await props.service.Login(email, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isClient", response.data.isClient);
      localStorage.setItem("isAvocat", response.data.isAvocat);
      window.location.reload();

      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(true);
        setErrorMessage(error.response.data.message);
      }
    }
  };
    // function for visability of password
    const VisibleHandler=(visibleName)=>{
      setVisibleClecked(visibleName);
      
     }
 // visabiltyImage
 let visabiltyImage=""
 if(visibleClecked=="Visibility"){
  visabiltyImage=<VisibilityOff
  className="visibilitéIconLogin"
  onClick={(event) => VisibleHandler("VisibilityOff")}
  ></VisibilityOff>
}else{
  visabiltyImage=<Visibility
  className="visibilitéIconLogin"
  onClick={(event) => VisibleHandler("Visibility")}
  ></Visibility>
}
  return (
    <div className={props.className}>
     
      {/* <img src={props.formImage} alt={props.alt} /> */}
      <div className="Loginform">
         <h3 className="error"> {errorMessage} </h3>
      <h2>Connexion</h2>
        <div>
          <Email></Email>
          <lable>Email * </lable>
          <input name="Email" onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          />
        </div>
        <div className="passWordInput">
          <Lock></Lock>
          <lable>Password *</lable>
          {visabiltyImage}

          <input
                 name="Password"
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="********"
                 type={visibleClecked=="Visibility" ? "text" : "password"}
               />
        </div>
        <div className="subBtns">
        <a >
          <button onClick={(e) => hendelClick(e)} className="subBtn">
            Connecter
          </button>
        </a>
        <a href="/signup">
        {" "}
        <button className="subBtn">Enregistre</button>
      </a>
      </div>
      </div>
    </div>
  );
};
export default LoginForm;
