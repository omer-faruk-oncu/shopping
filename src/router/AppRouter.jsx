import React from "react";
import { Routes, Route } from "react-router-dom";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";


const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default AppRouter;