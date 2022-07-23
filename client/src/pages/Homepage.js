import {usePosts} from '../context/postContext'
import {Link} from 'react-router-dom'
import {Postcard} from '../components/Postcard'

export function Homepage() {

  const {posts} = usePosts()

  if (posts.lenght === 0) return (
    <div>
      <h1>no publish are made</h1>
    </div>
  )

  return (
    <div className="text-xl font-bold text-white">
      <div className='text-center pt-1 xl:pt-16 lg:pt-5'>
      <Link to={"/new"}>
        <button className='btn bg-green-500 rounded-lg p-4'>
          Upload a new IMG
        </button>
      </Link>
      </div>
      <div className='xl:columns-4 lg:columns-3 sm:columns-2 gap-2'>
      {posts.map(p => <Postcard post={p} key={p._id} /> )}
      </div>
    </div>
  )
}
