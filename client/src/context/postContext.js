import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequest, createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/posts";

//creando el context
const postContext = createContext();

//hook personalizado 
export const usePosts = () => {

  const context = useContext(postContext);

  return context;
};

//provider
export const PostProvider = ({ children }) => {
  //state para q accedan todos
  const [posts, setPosts] = useState([]);
  //funcino traer posts del back y setiarlos en el estado
  const getPosts = async () => {
    const res = await getPostsRequest();
    setPosts(res.data)
  };
  //create post
  const createPost = async(post) => {
    try {
      const res = await createPostRequest(post)
      setPosts([...posts, res.data])
    } catch (error) {
      console.log(error)
    }

  }
  //delete post DATO: _id compara con el id q recivo , son dos diferrentes
  const deletePost = async (id) => {
    const res = await deletePostRequest(id)
    if (res.status === 204) {
      setPosts(posts.filter(p => p._id !== id))
    }
  }
//traer post que ya exiten para cargarlos en form
const getPost = async(id) => { 
  const res = await getPostRequest(id)

  return res.data
 };
 //actualizar un post
 const updatePost = async(id, newvalues) => {
  const res = await updatePostRequest(id, newvalues)
  setPosts(posts.map(p => p._id === id ? res.data : p))
console.log(res)
 }

//cada vez que cargue el provider ,se lanza el effect que es basicamente traer los posts
  useEffect(() => {
    getPosts()
    }, [])
  

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost
      }}
    >
      {children}
    </postContext.Provider>
  );
};
