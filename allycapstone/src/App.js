import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Volunteer from "./pages/Volunteer";

import "./App.css";
export const AppContext = React.createContext();
function App() {
  const [basename, setBasename] = useState("/");

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      <Router basename={basename}>
        <Navbar />
        <Routes path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="volunteer" element={<Volunteer Hours />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
