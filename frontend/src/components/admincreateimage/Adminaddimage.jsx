import { useState } from "react"
import "../admincreateimage/adminaddimage.css"
import { data } from "react-router-dom";
import axios from "axios"

function Adminaddimage() {
  const [imagedata, setimagedata] = useState({});
  console.log(imagedata, "////////////////////");
  const [imageurl, setimageurl] = useState("");
  console.log(imageurl);

  const [name, setname] = useState("");
  console.log(name);
  const [board, setboard] = useState("");
  console.log(board, "bordeeeeeeeeeeeeeeee");
  const [discription, setdiscription] = useState("");
  console.log(discription);


  function imageupload(e) {
    const file = e.target.files[0];
    setimagedata(file)
    setimageurl(URL.createObjectURL(file))
  }

  function imagehandler() {
    const formData = new FormData()
    formData.append('Name', name)
    formData.append('Board', board)
    formData.append('Discription', discription)
    formData.append('image', imagedata)

    console.log(formData, ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');


    axios.post("http://localhost:8000/addimage", formData).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }




  console.log(imagedata)


  return (
    <div className="admin-create-big-container">

      <h2>Create</h2><br />

      <div className="admin-create-conatainer">

        <div className="admin-create-left-container">
          <label htmlFor="image"></label>
          <div className="input-section">
            <input className="image-input" type="file" id="image" name="image" accept="image/*" onChange={(e) => imageupload(e)}>
            </input>
            <img src={imageurl} alt="" height="380px" width="300px" />
          </div>
        </div>

        <div className="admin-right-container">
          <form>
            <label htmlFor="productName">Title</label><br />
            <input
              type="text"
              id="imagetName"
              name="imagetName"
              placeholder="Add a title"
              required
              onChange={(e) => setname(e.target.value)}
            /><br></br>

            <label htmlFor="category">Catagery</label>
            <select name="category" onChange={(e) => setboard(e.target.value)} >
              <option value="Select a catagery">Select Catagery</option>
              <option value="beach">Beach</option>
              <option value="Car">Car</option>
              <option value="Food">Food</option>
              <option value="Aesthetic">Aesthetic</option>
            </select><br /><br />



            <label htmlFor="description">Description</label><br />
            <textarea
              id="description"
              name="description"
              placeholder="Add a Detailed description"
              required
              onChange={(e) => setdiscription(e.target.value)}
            ></textarea><br /><br></br>
            <div className="admin-create-button">
              <button type="button" onClick={imagehandler}>Publish</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
export { Adminaddimage }