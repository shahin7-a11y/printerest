



import { imageschema } from "../model/imageschema.js";
import { v2 as cloudinary } from "cloudinary"

async function addimage(req, res) {
    let imageurl = req.file;


    let name = req.body.Name;
    console.log(name, "nameeeeeeeeeeeeeeeee")
    let board = req.body.Board;
    console.log(board, "boarddddddddddddddd")
    let Discription = req.body.Discription;
    console.log(Discription, "discriptionnnnnnnnnnnn")




    try {

        if (!req.file || !req.file.buffer) {
            return res.status(400).json({ error: 'No file provided in the request' });
        }


        const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
            if (error) {
                console.error('Error uploading to Cloudinary:', error);
                return res.status(500).json({ error: 'Error uploading to Cloudinary' });
            }


            let insert = await imageschema.insertOne({
                Title: name,
                Board: board,
                Discription: Discription,
                image: result.secure_url
            })


            res.status(201).json({ message: 'Video uploaded successfully' });
        }).end(req.file.buffer);
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Error uploading video' });
    }
}


export { addimage }


async function getimage(req, res) {
    try {
        let id = req.query.imageid;
        console.log(id, 'kkkkkkkkkkkkkkkk');
        const imagedetails = await imageschema.findOne({ _id: id });
        // console.log(imagedetails, "imgeeeeeeeeeeeeeeeeeeeeeee1");

        res.json({ images: imagedetails });
    } catch (err) {
        console.error("Error fetching images:", err);
        res.json({ error: "Failed to fetch images" });
    }
}
export { getimage }

async function editimage(req, res) {
    const imgdetails = await imageschema.find({ isdeleted: false })
    // console.log(imgdetails,"imggeeeeeeeeeeeeeeeeeee")
    res.json({ data: imgdetails })
}
export { editimage }

async function editdatapost(req, res) {
    let file = req.file;
    console.log(file, "imggggggggggggggggggggggg");
    let name = req.body.Name;
    console.log(name, "nameeeeeeeeeeeee")
    let board = req.body.Board;
    console.log(board, "boardeeeeeeeeeeeeeeeeee");
    let Discription = req.body.Discription;
    console.log(Discription, "discriptooooooooooo")
    console.log(req.body, ':::::::::::::::::::::::')
    const imageId = req.body.imageid
    try {





        if (!file) {
            let insert = await imageschema.updateOne({ _id: imageId }, {
                $set: {
                    Title: name,
                    Board: board,
                    Discription: Discription,
                }
            })
            return res.status(201).json({ status: 'image Data updated' });
        }
        const result = await cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
            if (error) {
                console.error('Error uploading to Cloudinary:', error);
                return res.status(500).json({ error: 'Error uploading to Cloudinary' });
            } else {
                console.log(result.url, '////////////////////////')
                let insert = await imageschema.updateOne({ _id: imageId }, {
                    $set: {
                        Title: name,
                        Board: board,
                        Discription: Discription,
                        image: result.secure_url
                    }
                })


                res.status(201).json({ message: 'Video uploaded successfully' });
            }
        }).end(req.file.buffer);

    } catch (error) {

    }

}
export { editdatapost }


async function deleteimage(req, res) {

    let imageId = req.query.imageid;
    console.log(imageId, "bodeeeeeeeeeeee")
    let deleteimage = await imageschema.updateOne({ _id: imageId }, { $set: { isdeleted: true } })
}
export { deleteimage }

async function beachcatagery(req, res) {
    let beachlist = await imageschema.find({ Board: "beach" })
    console.log(beachlist);
    res.json({beachlist});
}
export{beachcatagery}

async function carscatagery(req,res) {
    let carslist=await imageschema.find({Board:"car"})
    console.log(carslist,"careeeeeeeee");
    res.json({carslist});    
}
export{carscatagery}

async function womencatagery(req,res) {
  let womenlist=await imageschema.find({Board:"women"});
  console.log(womenlist);
  res.json({womenlist})
    
}
export{womencatagery}

async function aestheticcatagery(req,res) {
    let aestheticlist=await imageschema.find({Board:"aesthetic"})
    console.log(aestheticlist);
    res.json({aestheticlist})
      
    
}
export{aestheticcatagery}
async function addafavorites(req,res) {
    let imgid=req.body.imageId;
    let addfavorite=await imageschema.updateOne({_id:imgid},{$set:{like:true}})
    
    
}
export{addafavorites}
async function Favorite(req,res) {
    let favorite=await imageschema.find({like:true})
    console.log(favorite,"favvvvvvvvvvv")
    res.json({favorite})
}
export{Favorite}