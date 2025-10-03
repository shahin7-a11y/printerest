import axios from "axios"
import { useEffect, useState } from "react"
import "../aestheticcatagery/aestheticcatagery.css"

function Aestheticcatagery() {
    const [aestheticlist, setaesthetic] = useState([]);
    console.log(aestheticlist,"aeaaaaaaaaaaaaaaaaaaa")

    useEffect(() => {
        axios.get("http://localhost:8000/aesthetic").then((res) => {
            setaesthetic(res.data.aestheticlist);

        })
}, [])
    return (
        <div className="aesthetic-image-container">
            {aestheticlist.map((img,index)=>(

            <div className="aesthetic-image-view">
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
export { Aestheticcatagery }