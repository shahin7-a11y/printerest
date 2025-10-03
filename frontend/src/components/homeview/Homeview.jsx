import { useEffect, useState } from "react"
import view from "../../images/spiderman.jpg"
import "./homeview.css"
import axios from "axios"

function Homeview({ search }) {
    const [image, setimage] = useState([]);

    const searchData = image.filter((images) =>
        images.Board.toLowerCase().startsWith(search.toLowerCase())
    );

    console.log(searchData, "dattttttttttttaaaaaaaaaaaa");

    console.log(image, "detailsssssssssssssssssssssssss");
    const [hover, setHover] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/editimage").then((res) => {
            console.log(res.data.data, "datttttttttttttaaaaaaaaaa")
            setimage(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


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

function favoritebuttonhandler(id){
    axios.post("http://localhost:8000/addfavorite",{imageId:id})
}



    return (


        <div className="image-container">
            {(searchData.length == !0 ? image : searchData).map((img, index) => (
                <div className="viewimage" key={index} onMouseEnter={() => { setHover(true + index) }} onMouseLeave={() => { setHover(false) }} >
                    <img src={img.image} alt={`image-${index}`} />

                    {hover == true + index ? <div className="download-favorite-div">

                        <button
                            className="download-button"
                            onClick={() => handleDownload(img.image)}
                            style={{ fontSize: "26px", background: "none", border: "none", cursor: "pointer" }}
                        >
                            <i className="bi bi-arrow-down-circle"></i>
                        </button> <br />

                        <button
                            className="favorites-button"
                            style={{ fontSize: "25px", background: "none", border: "none", cursor: "pointer" }}
                            onClick={()=>favoritebuttonhandler(img._id)}
                        >
                            <i class="bi bi-heart"></i>
                        </button>
                    </div> : ""}


                </div>
            ))}
        </div>


    )
}
export { Homeview }