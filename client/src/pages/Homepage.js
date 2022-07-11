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
      <Link to={"/new"}>
        <button className='btn bg-blue-700 rounded-lg p-4'>
          Create new task
        </button>
      </Link>
      <div className='grid grid-cols-3 gap-2'>
      {posts.map(p => <Postcard post={p} key={p._id} /> )}
      </div>
    </div>
  )
}
