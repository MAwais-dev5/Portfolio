import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import "./index.css"
import { useState, useEffect } from "react";
import {Navbar} from './Components/Sections/Navbar';
function App() {
 
 const [isloaded,setIsloaded]=useState(false);
 const [menuOpen,setMenuOpen]=useState(false);
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={()=>setIsloaded(true)}/>}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} 
      bg-black text-gray-100`}></div>
      <Navbar menuOpen={menuOpen} setMenuOpen={menuOpen}/>
    </>
  )
}

export default App
