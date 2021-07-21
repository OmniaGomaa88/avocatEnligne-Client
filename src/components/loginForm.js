import { useState, React } from "react";
import "./style/form.scss";
import Email from "@material-ui/icons/Email"
import Lock from "@material-ui/icons/Lock";
const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const hendelClick = async (e)=>{
    let response = await props.service.Login(email, password)
    if(response.data.success){
      localStorage.setItem('token', response.data.token);
      let userId = localStorage.setItem("userId",response.data.id)
       props.history.push('/rendezVous');
      }
    
    // console.log(localStorage.getItem("userId"))
  }

  return (
    <div className={props.className}>
      <div className="Formcontainer">
      <img src={props.formImage} alt={props.alt}/>
        <div className="form">
            
          <div className="column">
            <div>
              <Email></Email>
              <lable>Email * </lable>
              <input name="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Lock></Lock>
              <lable>Password *</lable>
              <input
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={e=> hendelClick(e)}
           
              
            
             className="subBtn">
              Enregistre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
