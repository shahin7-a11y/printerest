import background from "../../images/homebg.png";
import { LoginForm } from "../../pages/home/loginform/Loginform";
import "./homebg.css"

function Homebg() {


  return (
    <div className="background-image">
      <div className="login-text">
        <h1>Login to get <br />Youe ideas</h1>
      </div>
      <div className="loginSection">
        <LoginForm />
      </div>




    </div>
  )
}

export default Homebg;
