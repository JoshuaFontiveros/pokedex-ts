import React from "react";
import { Routes, Route } from "react-router-dom";
import Poketype from "./routes/poketype/Poketype";
import Home from "./routes/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:types" element={<Poketype />} />
    </Routes>
  );
};

export default App;
