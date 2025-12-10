import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import "./index.css"
import { useState, useEffect } from "react";

function App() {
 
 const [isloaded,setIsloaded]=useState(false);
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={()=>setIsloaded(true)}/>}
    </>
  )
}

export default App
