import axios from "axios";
import { useEffect, useState } from "react";


function Favorites() {
    const[favorites,setfavorites]=useState([]);
    console.log(favorites,"favvvvvvvvvvvvv")

    useEffect(()=>{
        axios.get("http://localhost:8000/favorite").then((res)=>{
            setfavorites(res.data.favorite)
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
                 <div className="women-image-container">
          
{favorites.map((img,index)=>(

                <div className="women-image-view"> 
                    <img src={img.image} alt="image" />
                    <button
                        onClick={() => handleDownload(img.image)}
                        style={{ fontSize: "30px", background: "none", border: "none", cursor: "pointer" }}
                    >
                        <i className="bi bi-arrow-down-circle"></i>
                    </button>
                </div>
))}
            
        </div>
    )
    
}
export{Favorites}