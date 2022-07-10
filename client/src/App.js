import React from "react";
import { Homepage, Postform, Notfoundpage } from "./pages";
import { Routes, Route } from "react-router";

import { PostProvider } from './context/postContext'

const App = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center ">
      <div className="container m-auto">

      <PostProvider>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new" element={<Postform />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      
      </PostProvider>
      </div>
    </div>
  );
};

export default App;
