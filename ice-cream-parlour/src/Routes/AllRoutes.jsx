import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../Pages/Customer";
import HomePage from "../Pages/HomePage";
import Owner from "../Pages/Owner";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/owner" element={<Owner />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
};

export default AllRoutes;
