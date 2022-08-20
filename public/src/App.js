import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./index.css";
export default function App() {
  return (
    <>
       <div className="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div> 
      <div></div>
      <div></div>
      <div></div>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </>
   
  );
}
