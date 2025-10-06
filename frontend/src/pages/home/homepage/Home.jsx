
import { useEffect, useState } from "react"
import { Homeview } from "../../../components/homeview/Homeview"
import "./home.css"
import { Explorepage } from "../../../components/explore/Explore"
import { Create } from "../../../components/create/Create"
import Navbar from "../../../components/Nav/Nav"
import { Beachcatagery } from "../../../components/baechcatagery/Beachcatagery"
import { Carscatagery } from "../../../components/carscatagery/Carscatagery"
import { Womencatagery } from "../../../components/womenscatagery/Womencatagery"
import { Aestheticcatagery } from "../../../components/aestheticcatagery/Aestheticcatagery"
import { Favorites } from "../Favorites/Favorites"
import { Usercard } from "../../../components/usercard/Usercard"

function Home() {

  const [search, setsearch] = useState("");
  console.log(search, "sssssssssssssssss")

  let setNavDetails;
  function getSetNavDetails(getSetNavDetails) {
    setNavDetails = getSetNavDetails
  }

  useEffect(() => {
    setNavDetails(true)
  })

  const [background, setbackground] = useState("homeview")
  console.log(background);


  return (
    <div className="home-big-container">

      <Navbar position="fixed" getSetNavDetails={getSetNavDetails} setsearch={setsearch} justifycontent="space-between" setbackground={setbackground}/>
      <div className="home-container">
        <Usercard/>
        


        <div className="sideBar">
          <div className="homenavbar-right">
            <button onClick={() => setbackground("homeview")}><i style={{ fontSize: "25px", cursor: 'pointer' }} class="bi bi-house-door-fill"></i></button><br></br>
            <button onClick={() => setbackground("explore")}><i style={{ fontSize: "25px", cursor: 'pointer' }} class="bi bi-dropbox"></i></button><br></br>
            <button onClick={() => setbackground("create")}><i style={{ fontSize: "25px", cursor: 'pointer' }} class="bi bi-plus-square-fill"></i></button><br></br>
            <button onClick={() => setbackground("favorite")}><i style={{ fontSize: "25px", cursor: 'pointer' }} class="bi bi-heart-fill" ></i></button><br></br>

            {/* <button onClick={() => setbackground("notification")}><i style={{ fontSize: "25px" }} class="bi bi-bell-fill"></i></button><br></br>
            <button onClick={() => setbackground("messages")}><i style={{ fontSize: "25px" }} class="bi bi-chat-left-dots-fill"></i></button> */}
          </div>

        </div>

        <div className="homeRightSection">

          {background == "homeview" ? <Homeview search={search} /> : ""}
          {background == "explore" ? <Explorepage setbackground={setbackground} /> : ""}
          {background == "create" ? <Create /> : ""}
          {background == "beach" ? <Beachcatagery /> : ""}
          {background == "cars" ? <Carscatagery /> : ""}
          {background == "women" ? <Womencatagery /> : ""}
          {background == "aesthetic" ? <Aestheticcatagery /> : ""}
          {background== "favorite"?<Favorites/>:""}
          {background=="usercard"?<Usercard setbackground={setbackground}/>:""}

        </div>






      </div>





    </div>






  )
}
export { Home }