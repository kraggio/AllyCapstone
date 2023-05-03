import React, { useState } from "react";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Volunteer from "./pages/Volunteer";

// import Map from "./components/Map";

import Footer from "./components/Footer";
import Partners from "./pages/Partners";

import "./App.css";
export const AppContext = React.createContext();
function App() {
  const [basename, setBasename] = useState("/");

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="volunteer" element={<Volunteer Hours />} />
          <Route path="Home" element={<Home />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
