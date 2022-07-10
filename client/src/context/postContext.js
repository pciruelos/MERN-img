import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequest, createPostRequest } from "../api/posts";

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
    const res = await createPostRequest(post)
    setPosts([...posts, res.data])
    console.log(res.data)
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
        createPost
      }}
    >
      {children}
    </postContext.Provider>
  );
};
