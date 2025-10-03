import { useState } from "react"
import { Button } from "../../../components/button/Button"
import { Inputbox } from "../../../components/Inputbox/Inputbox"
import logo from "../../../images/pintrest.png"
import "./loginform.css"
import axios from "axios"

function LoginForm() {

    const[status,setstatus]=useState("")
    
    const [Email, setEmail] = useState("")
    console.log(Email, "emilwwwwwwwwwwwwwww")
    const [Password, setpassword] = useState("")
    console.log(Password)
       console.log(status,"statttttt")

    function loginbutton() {

        axios.post("http://localhost:8000/login", { Email, Password }).then((res) => {
            setstatus(res.data);

        }).catch((error) => {
            console.log(error)
        })

        if(status==true){
            window.location.href=("/home")
         

        }else{
            alert("Email or Password is incorrect")
        }


        
    }
    return (
        <div className="loginform-container">

            <div className="form-logo">
                <img src={logo} height="70px" width="70px" />
            </div>
            <div className="form-heading">
                <h1 style={{ fontFamily: "Arial, sans-serif" }}>Welcometo <br /> Pintrest</h1>
            </div>


            <div className="form-inputs">
                <div className="input-set">
                    <label>Email</label> <br />
                    <input type="text" placeholder="Emali" onChange={(e) => setEmail(e.target.value)} /> <br />
                </div><br></br>
                <div className="input-set">
                    <label>Password</label> <br />
                    <input type="text" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <div className="forgot">
                    <a href="">Forgot your Password?</a>
                </div><br></br>

                <div className="loginButtons">
                    <button type="button" onClick={loginbutton}>Log in</button>
                </div>
            </div><br />

            <h5>Facebook Login Is No Longer Available</h5><br />
            <h6>By continuing, you agree to Pinterest's Terms of <br /> Service and acknowledge you've read our Privacy Policy. <br /> Notice at collection.</h6>


        </div>
    )
}
export { LoginForm }