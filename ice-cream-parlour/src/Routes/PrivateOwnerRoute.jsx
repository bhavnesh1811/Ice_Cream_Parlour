import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateOwnerRoute = ({ children }) => {
  let [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const nav = useNavigate();
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, [nav, token]);
  
  if (!token) {
    return <Navigate to="/owner/login" />;
  }
  return children;
};

export default PrivateOwnerRoute;
