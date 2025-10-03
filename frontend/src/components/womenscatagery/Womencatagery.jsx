import axios from "axios"
import { set } from "mongoose"
import { useEffect, useState } from "react"
import "../womenscatagery/womencatagery.css"

function Womencatagery(req, res) {
    const [womenlist, setwomenlist] = useState([])
    console.log(womenlist,"woooooooooooooooooo")

    useEffect(() => {
        axios.get("http://localhost:8000/womencatagery").then((res) => {
            setwomenlist(res.data.womenlist,"womwnnnnnnnnnnnnnnnnn");

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
    return (
        <div className="women-image-container">
            {womenlist.map((img, index) => (

                <div className="women-image-view"> 
                    <img src={img.image} alt={`beach-${index}`} />
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
export { Womencatagery }