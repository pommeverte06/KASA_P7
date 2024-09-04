import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header"; 
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
