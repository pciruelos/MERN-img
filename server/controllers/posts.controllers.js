import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from 'fs-extra'

export const getAllPost = async (req, res) => {
  try {
    // throw new Error('error is enable')
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image = null

    if (req.files?.image) {
     const result = await uploadImage(req.files.image.tempFilePath);
     await fs.remove(req.files.image.tempFilePath)
     image = {
        url: result.secure_url,
        public_id: result.public_id
     }
    }
// aca para guardar no hace falta poner title: title podria ser title solo pero cabe destacar y acordarse que 
// title es titlte: title
    const newPost = new Post({ title, description, image });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.sendStatus(404);

    if(deletedPost.image.public_id){
        await deleteImage(deletedPost.image.public_id)
    }
    return res.sendStatus(204)

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const bringOnePost = async (req, res) => {
  try {
    const onePost = await Post.findById(req.params.id);
    if (!onePost) return res.sendStatus(404);
    return res.json(onePost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
