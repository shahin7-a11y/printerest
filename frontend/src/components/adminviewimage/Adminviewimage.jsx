import { useEffect, useState } from "react"
import "../adminviewimage/adminviewimage.css"
import axios from "axios"
import { Button } from "../button/Button";
function Adminviewimage({ setadminhome, setImageId }) {
  
    const [imagedata, setimagedata] = useState([]);
    
    console.log(imagedata, "imageeeeeeeeeeeeeeeeeeeeedatttt")

    useEffect(() => {
        axios.get("http://localhost:8000/editimage").then((res) => {
            console.log(res.data)
            setimagedata(res.data.data)

        }).catch((error) => {
            console.log(error)
        })
    }, [])
    function buttonclicks(id) {
        setImageId(id)
        setadminhome("editdetails")
    }
      
    function deletebutton(id){
      
        console.log(id,"ideeeeeeee")
        axios.post(`http://localhost:8000/deleteimage?imageid=${id}`).then((res)=>{
            console.log(res);
            setadminhome("editdetails")
        }).catch((error)=>{
            console.log(error);
            
        })


    }
    

    return (
        <div className="Admin-viewimage-contanier">
            {imagedata.map((img, index) => (
                <div className="admin-viewimage-image">
                    <div>
                        <img src={img.image} alt="image" />
                    </div>

                    <div className="admin-viewimage-button">

                        <button onClick={() => { buttonclicks(img._id) }}><i class="bi bi-pencil-square" style={{ fontSize: "22px", color: "blue" }}></i></button>
                        <button onClick={()=>{deletebutton(img._id)}}><i class="bi bi-trash3-fill" style={{ fontSize: "22px", color: "red" }}></i></button>
                    </div>

                </div>

            ))}

        </div>
    )
}
export { Adminviewimage }