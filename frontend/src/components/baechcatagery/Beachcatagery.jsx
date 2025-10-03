import axios from "axios";
import { useEffect, useState } from "react";
import "../baechcatagery/beachcatagery.css"

function Beachcatagery() {
    const [beachimage, setbeachimage] = useState([]);
    console.log(beachimage, "bacheeeeeeeeee");

    useEffect(() => {
        axios
            .get("http://localhost:8000/beachcatagery")
            .then((res) => {
                setbeachimage(res.data.beachlist)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
        <div className="beach-image-container">
            {beachimage.map((img, index) => (
                <div className="beach-image-view" key={index}>
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
    );
}

export { Beachcatagery };
