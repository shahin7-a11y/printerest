import { useEffect, useState } from "react";
import "../admineditimage/admineditimage.css";
import axios from "axios";

function Admineditimage({ imageId }) {
    const [imgId, setimgId] = useState("")
    console.log(imgId, "ideeeeee")
    const [imagedetails, setimagedetails] = useState({});
    console.log(imagedetails, 'imagedetails,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')

    const [name, setname] = useState("");
    console.log(name, "nmeeeeeeeeee")
    const [board, setboard] = useState("");
    console.log(board, "boardeeeeeeeeeeeee");
    const [description, setdescription] = useState("");
    console.log(description);

    const [imageFile, setimageFile] = useState(null);
    console.log(imageFile, "imageeeeeeeeeeeeeeeew");
    const [imageurl, setimageurl] = useState()
    console.log(imageurl, "urlllllllllllllll")

    useEffect(() => {
        axios
            .get(`http://localhost:8000/getimage?imageid=${imageId}`)
            .then((res) => {
                setimagedetails(res.data.images);
                setimageurl(res.data.images.image)
                setimgId(res.data.images._id)
                setname(res.data.images.Title)
                setboard(res.data.images.Board)
                setdescription(res.data.images.Discription)


                // setimageurl(res.data.images.image);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [imageId]);

    function imagehandler(e) {
        console.log(e, "eeeeeeeeeeeeeeeeee")
        const file = e.target.files[0]
        setimageFile(file)
        setimageurl(URL.createObjectURL(file))


    }

    function editbutton() {

        const formData = new FormData();
        formData.append("imageid", imgId)
        formData.append("image", imageFile);
        formData.append("Name", name);
        formData.append("Board", board);
        formData.append("Discription", description);
        console.log(formData, "formmmwwwwwwwwwwww")


        axios.post("http://localhost:8000/editdatapost", formData).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }





    return (
        <div className="admin-edit-big-container">
            <h2>Edit Image</h2>

            <div className="admin-edit-conatainer">
                {/* Left Side */}
                <div className="admin-edit-left-container">
                    <div className="input-section">

                        <label htmlFor="image"></label>
                        <input
                            className="image-input"
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={(e) => imagehandler(e)}
                        />

                        <img src={imageurl} alt="" height="400px" width="300px" />
                    </div>

                </div>

                {/* Right Side */}
                <div className="admin-edit-right-container">
                    <form>
                        <label htmlFor="productName">Title</label><br />
                        <input
                            type="text"
                            id="imagetName"
                            name="imagetName"
                            placeholder="Add a title"
                            defaultValue={name}
                            onChange={(e) => setname(e.target.value)}
                        /><br />

                        <label htmlFor="category">Board</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Board"
                            required
                            defaultValue={board}
                            onChange={(e) => setboard(e.target.value)}
                        /><br />

                        <label htmlFor="description">Description</label><br />
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Add a Detailed description"
                            required
                            defaultValue={description}
                            onChange={(e) => setdescription(e.target.value)}
                        ></textarea><br /><br />

                        <div className="admin-edit-button">
                            <button type="submit" onClick={editbutton}>Edit Details</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export { Admineditimage };
