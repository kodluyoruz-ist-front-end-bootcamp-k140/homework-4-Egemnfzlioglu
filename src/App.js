// ### dependecies: React, ReactDOM, BrowserRouter, Route
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ### Pages: Home, About, Contact

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from './pages/NotFound';
import Layout from "./Layout";

function App() {
  return (

    <div className="App"  style={{margin:"8rem 0"}}>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" exact element={<Layout />}>

            <Route path=""  element={<Home/>}  />          
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
