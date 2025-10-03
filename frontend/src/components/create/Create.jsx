import { useState } from "react";
import "../create/create.css"
import axios from "axios";

function Create() {
  const [image, setImage] = useState();
  const [imageurl,setimageurl]=useState();
  const [name, setName] = useState("");
  console.log(name)
  const [board, setBoard] = useState("");
  console.log(board,"bordeeeeeeeeee") 
  const [description, setDescription] = useState("");

  function immagehandler(e){
    const file=e.target.files[0];
    setImage(file)
    setimageurl(URL.createObjectURL(file))


  }

  function buttonhandler(e) {
    e.preventDefault();

    const formData = new FormData();
    console.log(formData)
    formData.append("image", image); 
    formData.append("Name", name);
    formData.append("Board", board);
    console.log(formData,"formeeeeeeeeeeeeee")
    formData.append("Discription", description);

    axios.post("http://localhost:8000/addimage", formData)
      .then((res) => {
        console.log("Upload Success:", res);
        alert("image added successfully!");
        // window.location.href=("/home")
      })
      .catch((error) => {
        console.error("Upload Error:", error);
      });

      

  }

  return (
    <div className="create-big-container">
      <h2>Create</h2><br />

      <div className="create-conatainer">
        <div className="create-left-container">
          {/* <label htmlFor="image">Upload Image</label><br />   <br />   */}
          <div className="input-section">
          <input
            className="image-input"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => immagehandler(e)} 
          />
          <img src={imageurl}  height="380px" width="300px"/>
          </div>
        </div>

        <div className="right-container">
          <form >
            <label htmlFor="productName">Title</label><br />
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Add a title"
              required
              onChange={(e) => setName(e.target.value)}
            /><br />

            <label htmlFor="category">Catagery</label>
            {/* <input
              type="text"
              id="category"
              name="category"
              placeholder="Board"
              required
              onChange={(e) => setBoard(e.target.value)}
            /><br /> */}
            <select name="" id="" onChange={(e)=>setBoard(e.target.value)}>
              <option value="not selected">Select Catagery</option>
              <option value="beach">Beach</option>
              <option value="car">Car</option>
              <option value="food">women</option>
              <option value="aesthetic">Aesthetic</option>
            </select><br /><br />

            <label htmlFor="description">Description</label><br />
            <textarea
              id="description"
              name="description"
              placeholder="Add a Detailed description"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea><br /><br />

            <div className="create-button">
              <button type="button" onClick={buttonhandler}>Publish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Create };
