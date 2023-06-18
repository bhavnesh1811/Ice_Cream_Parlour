import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Customer/Cart";
import Icecreams from "../Pages/Customer/Icecreams";
import HomePage from "../Pages/HomePage";
import AddIceCreams from "../Pages/Owner/AddIceCreams";
import Inventory from "../Pages/Owner/Inventory";
import Login from "../Pages/Owner/Login";
import PrivateOwnerRoute from "./PrivateOwnerRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
        <Route path="/customer/icecreams" element={<Icecreams />} />
        <Route path="/customer/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
