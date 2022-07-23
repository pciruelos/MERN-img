import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-12 bg-white ">
  <div className="px-5 text-center">
    <h2 className="mb-2 text-[42px] font-bold text-zinc-800">MERN App For Uploading Images</h2>
    <p className="mb-2 text-lg text-zinc-500">This is a simple web application made it with React + Mongodb + Express + Node. Has education and fun and last but not least To practice some react new features.
    we use Cloudinary for hosting our imgages and mongodb atlas for the database. Deploy is made it in Heroku.</p>
    <a href="/new" className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Lets Get Started →</a>
  </div>
</div>
  )
}

export default About