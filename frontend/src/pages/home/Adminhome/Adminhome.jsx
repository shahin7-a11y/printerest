import { useEffect, useState } from "react";
import { Button } from "../../../components/button/Button";
import Navbar from "../../../components/Nav/Nav";
import { Searchbar } from "../../../components/SearchBar/Searchbar";
import "../Adminhome/adminhome.css"
import { Dashboard } from "../../../components/dashboard/Dashboard";
import { Adminaddimage } from "../../../components/admincreateimage/Adminaddimage";
import { Admineditimage } from "../../../components/admineditimage/Admineditimage";
import { Adminviewimage } from "../../../components/adminviewimage/Adminviewimage";

function Adminhome() {
    const [imageId, setImageId] = useState('')
    console.log(imageId, 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    let setNavDetails;
    function getSetNavDetails(getSetNavDetails) {
        setNavDetails = getSetNavDetails
    }

    useEffect(() => {
        setNavDetails(true)
    })

    const [adminhome, setadminhome] = useState("Dashboard")
    console.log(adminhome)

    return (
        <div className="admin-home-bigcontianer">
            <div>
            <Navbar getSetNavDetails={getSetNavDetails} boxshadow="0px 0px 10px black" position="fixed" />
            </div>
            <div className="admin-home-container">

                <div className="admin-home-rightsection">
                    <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                        <div>
                            <i class="bi bi-bar-chart-line-fill" style={{ fontSize: "20px", color: "gray" }}></i>
                        </div>
                        <div>
                            <button onClick={() => setadminhome("Dashboard")}>Dashboard</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                        <div >
                            <i class="bi bi-file-image-fill" style={{ fontSize: "20px", color: "gray" }}></i>
                        </div>
                        <div>
                            <button onClick={() => setadminhome("images")}>Add Images</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                        <div >
                            <i class="bi bi-file-earmark-play-fill" style={{ fontSize: "20px", color: "gray" }}></i>
                        </div>
                        <div>
                            <button onClick={() => setadminhome("editimage")}>Edit Images</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                        <div>
                            <i class="bi bi-collection-fill" style={{ fontSize: "18px", color: "gray" }}></i>
                        </div>
                        <div>
                            <button onClick={() => setadminhome("collections")}>Collections</button>
                        </div>
                    </div>


                </div>
                <div className="admin-home-leftsection">
                    {adminhome == "Dashboard" ? <Dashboard /> : ""}
                    {adminhome == "images" ? <Adminaddimage /> : ""}
                    {adminhome == "editimage" ? <Adminviewimage setadminhome={setadminhome} setImageId={setImageId} /> : ""}
                    {adminhome == "editdetails" ? <Admineditimage imageId={imageId} /> : ""}
                    
                </div>
            </div>
        </div>
    )
}
export { Adminhome }