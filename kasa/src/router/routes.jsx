import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About";
import Logement from "../pages/Logement/Logement";
import NotFound from "../pages/Notfound/Notfound.jsx";
import App from "../App"; //contient header et footer

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
