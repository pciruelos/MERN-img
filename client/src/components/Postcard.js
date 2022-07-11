import toast from 'react-hot-toast'
import {usePosts} from '../context/postContext'
import {useNavigate} from 'react-router-dom'



// recive props pero como no quiero poner props.post.id entonces destructuring recibo el objeto y listo
export function Postcard({post}) {

    const navigate = useNavigate()

    const {deletePost} = usePosts()

    //no hace falta que sea _id porq este es una funcion distinta para identificar 
    const handleDelete = (id) => {
        toast((t) => (
            <div>
                <h1>Are you sure u want to delete this post?<strong>{id}</strong></h1>
                <div className='flex justify-between'>
                    <button className='text-red-600 font-bold px-3 py-2'
                    onClick={() => {
                        deletePost(id)
                        toast.dismiss(t.id)
                    }}>
                        Yes, delete it!
                    </button>
                    <button className='text-green font-bold px-3 py-2' 
                    onClick={()=>toast.dismiss(t.id)}>
                        no! Cancel
                    </button>
                </div>
            </div>

        ) )
    }

    const handleEdit = (_id) => { 
        navigate(`/posts/${_id}`)
     };

  return (

    <div className=" text-black bg-zinc-100 rounded-xl shadow-sm shadow-black hover:bg-zinc-500 hover:cursor-pointer p-3 m-2">

        <div>
        <h3 className="text-center underline">
        {post.title}
        </h3>
        <p className='text-lg font-normal'>
        {post.description}
        </p>
        </div>
        <div className="flex justify-between">
            <button className="bg-red-600 text-sm rounded-sm text-white font-normal px-2 py-1"
            onClick={() => handleDelete(post._id)}>
                Delete
            </button>
            <button className="bg-green-600 text-sm rounded-sm text-white font-normal px-2 py-1"
            onClick={() => handleEdit(post._id)}>
                Edit
            </button>
        </div>

    </div>
  )
}

