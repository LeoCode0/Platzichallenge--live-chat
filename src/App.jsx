import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Chat } from "./components/Chat";

import "./GlobalStyles.css"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/chat/:id' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
