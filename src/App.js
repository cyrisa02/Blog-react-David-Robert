import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { Component }  from 'react';

const App = () => {
    return (
    <BrowserRouter>
    <Routes> 
        <Route path = "/" element={<Home/>} />
        <Route path = "/categories/:category" element={<Home/>} />

        </Routes>
        </BrowserRouter>
        )
}

export default App;
