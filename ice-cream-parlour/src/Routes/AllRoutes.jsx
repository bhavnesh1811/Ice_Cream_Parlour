import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../Pages/Customer";
import HomePage from "../Pages/HomePage";
import Owner from "../Pages/Owner";
import AddIceCreams from "../Pages/Owner/AddIceCreams";
import Inventory from "../Pages/Owner/Inventory";
import Login from "../Pages/Owner/Login";
import PrivateOwnerRoute from "./PrivateOwnerRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/owner" element={<Owner />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/owner/login" element={<Login />} />
      <Route
        path="/owner/inventory"
        element={
          <PrivateOwnerRoute>
            <Inventory />
          </PrivateOwnerRoute>
        }
      />
      <Route
        path="/owner/icecreams/add"
        element={
          <PrivateOwnerRoute>
            <AddIceCreams />
          </PrivateOwnerRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
