import React from "react";
import { Routes, Route } from "react-router-dom";
import Poketype from "./routes/poketype/Poketype";
import Home from "./routes/Home";
import usePoketype from "./routes/poketype/usePoketype";
const App = () => {
  const { poketype } = usePoketype();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type" element={<Poketype poketype={poketype} />} />
    </Routes>
  );
};

export default App;
