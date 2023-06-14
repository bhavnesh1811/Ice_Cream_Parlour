import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../Pages/Customer";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Owner from "../Pages/Owner";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/owner" element={<Owner />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/owner/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
