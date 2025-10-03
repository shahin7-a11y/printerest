// import { Button } from "../../../components/button/Button"
// import { Inputbox } from "../../../components/Inputbox/Inputbox"
import axios from "axios";
import { useState } from "react"
import logo from "../../images/pintrest.png"
import { Inputbox } from "../Inputbox/Inputbox"
import "./sign.css"

function Sign() {
    const [Email, setEmail] = useState("");
    console.log(Email)
    const [Password, setPassword] = useState("");
    console.log(Password)
    const [Birthdate, setBithdate] = useState("");
    console.log(Birthdate)


function clickbutton(){
   axios.post("http://localhost:8000/signup",{
    Email,Password,Birthdate
   })
   window.location.href=("/home")
}


    return (
        
        <div className="signform-big-container">

            <div className="signform-container">
                <form>
                    <div className="signform-logo">
                        <img src={logo} height="70px" width="70px" />
                    </div>
                    <div className="signform-heading">
                        <h1 style={{fontFamily: "Arial, sans-serif"}}>Welcometo Pintrest</h1>
                    </div>
                <div className="signform-details">

                    <label>
                        Email
                    </label><br />
                    <Inputbox placeholder="Emali" setform={setEmail} width="340px"/><br></br>
                    <label><br />
                        Password
                    </label><br />
                    <Inputbox placeholder="Password" setform={setPassword}  width="340px"/><br></br>
                    <label><br />
                        Birthdate
                    </label><br />
                    <Inputbox type="date" setform={setBithdate}  width="340px"/><br></br><br />
                 <div className="signform-button">

                    <button type="button" onClick={clickbutton}>Continue</button><br></br>
                    <p>By continuing, you agree to Pinterest's<br></br> Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection.
                    </p><br />
                    <h5 style={{color:"black",fontWeight:"200"}}>Already a member? <a href="/">Log in</a></h5>
                 </div>
                </div>

                </form>
            </div>
        </div>
        
    )
}
export { Sign }