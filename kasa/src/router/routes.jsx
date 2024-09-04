import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';          
import About from '../pages/about';
import Logement from '../pages/logement';
import NotFound from '../pages/notfound';
import App from '../App';  //contient header et footer

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />  
          <Route path="logement/:id" element={<Logement />} />  
          <Route path="*" element={<NotFound />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
