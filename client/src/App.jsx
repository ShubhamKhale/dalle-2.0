import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { CreatePost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-indigo-500 sm:pz-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className='rounded border-black outline-black'/>
            <p className='ml-5 text-white font-bold text-lg'>ImageGenius</p>
          </div>
        </Link>

      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;