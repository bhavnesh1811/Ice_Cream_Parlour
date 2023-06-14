import React from "react";
import { Route, Routes } from "react-router-dom";
import AddIceCreams from "../Pages/AddIceCreams";
import Customer from "../Pages/Customer";
import HomePage from "../Pages/HomePage";
import Inventory from "../Pages/Inventory";
import Login from "../Pages/Login";
import Owner from "../Pages/Owner";
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
        path="/owner/icecream"
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
