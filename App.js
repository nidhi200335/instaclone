import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Search from "./components/Search";

 import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Routes, Route } from 'react-router-dom';
 import Createpost from "./components/Createpost";
import Profile from './components/Profile';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  //import Modal from "./components/Modal";
function App() {
  //const[modalOpen, setModalOpen]=useState(false);
  const [showComponent, setShowComponent] = useState(false);
  
  const handleClick = () => {
    setShowComponent(true);
  };
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/createpost" element={<Createpost/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
</Routes>
      <ToastContainer theme="dark" />
      
    </div>
    
      
  );
}

export default App;
