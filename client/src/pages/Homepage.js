import {usePosts} from '../context/postContext'
import {Link} from 'react-router-dom'

export function Homepage() {

  const {posts} = usePosts()

  if (posts.lenght === 0) return (
    <div>
      <h1>no publish are made</h1>
    </div>
  )

  return (
    <div className="text-3xl">
      <Link to={"/new"}>
        <button className='btn bg-blue-700'>
          Create new task
        </button>
      </Link>
      <div className='bg-[#ff9b9b]'>
      {posts.map(p => <h1 className='px-4' key={p._id}>{p.title}</h1>)}
      </div>
    </div>
  )
}
