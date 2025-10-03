import { useEffect, useState } from "react"
import "../carscatagery/carscatagery.css"
import axios from "axios"
function Carscatagery(){
    const [carslist,setcarslist]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/carscatagery").then((res)=>{
            setcarslist(res.data.carslist);
            
        })
        
    },[])
        const handleDownload = (imageUrl) => {
  // Convert Cloudinary URL to attachment URL
  const downloadUrl = imageUrl.replace("/upload/", "/upload/fl_attachment/");

  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "downloaded-image.jpg"; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
    return(
            <div className="cars-image-container">
                {carslist.map((img,index)=>(

                <div className="cars-image-view">
                    <img src={img.image} alt={`beach-${index}`} />
                    <button
                        onClick={() => handleDownload(img.image)}
                        style={{ fontSize: "30px", background: "none", border: "none", cursor: "pointer" }}>
                        <i className="bi bi-arrow-down-circle"></i>
                    </button>
                </div>
                ))}
            </div>
    )
}
export{Carscatagery}