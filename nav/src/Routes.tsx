import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Bye from "./Bye";
import Hello from "./Hello";
import Welcome from "./Welcome";

const AppRoutes = () => {  
  return (
      <Routes>
        <Route path="/" element={<Hello />} ></Route>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/bye" element={<Bye />} />
        <Route path="/data" element={<Welcome />} />
        <Route path="/google" element={
          <Navigate to="/data/:id" replace />
        }>
        </Route>
      </Routes>
  );
}
export default AppRoutes;