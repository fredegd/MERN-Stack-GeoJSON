import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Properties from "./components/Properties"
import PropertyDetails from "./components/PropertyDetails";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/properties/insert-property" element={<InputForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
