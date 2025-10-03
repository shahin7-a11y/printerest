import "../explore/explore.css";
import image from "../../images/spiderman.jpg"
function Explorepage({setbackground}){
    

    function beachbutton(){
           setbackground("beach")
    }
    function homebutton(){
        window.location.href=("/home")
    }
    return(
           <>
         
            <div className="explore-big-container"> 
                <div className="explore-heading">
                    <h1>EXPOLRE MORE <br />
                    STAY INSPIRED</h1>
                </div>
           <div className="explore-container">
            
           <div className="explore-container1" onClick={beachbutton}>
                   <h2>Beach Days</h2>  
           </div>
           <div className="explore-container2" onClick={()=>setbackground("cars")}>
                 <h2>Cars </h2>
           </div>
           <div className="explore-container3" onClick={()=>setbackground("women")}> 
                    <h2>Women style</h2>
           </div>
           <div className="explore-container4" onClick={()=>setbackground("aesthetic")}>
             <h2>Aesthetic</h2>
           </div>
            </div>
            <div className="explore-button">
                <h4 style={{fontWeight:"300"}}>That's all for today!</h4><br />
                <h3>Come back tomorrow for more inspiration</h3>
                <button onClick={homebutton}>Go To Home Feed</button>
            </div>
           </div>
           </>
    )
}
export{Explorepage}