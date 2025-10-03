
import { useEffect } from "react"
import Homebg from "../../../components/homepagebg/Homebg"
import Navbar from "../../../components/Nav/Nav"
import './login.css'


function Login() {

    let setNavDetails;
    function getSetNavDetails(getSetNavDetails) {
        setNavDetails = getSetNavDetails
    }

    useEffect(() => {
        setNavDetails(false)
    })


    return (
        <div className="login-page">
            <div>
                <Navbar getSetNavDetails={getSetNavDetails} position="static"  justifycontent="space-between" display="none"  check={'login'}/>
            </div>
            <div>
                <Homebg />
            </div>

        </div>

    )
}
export { Login }