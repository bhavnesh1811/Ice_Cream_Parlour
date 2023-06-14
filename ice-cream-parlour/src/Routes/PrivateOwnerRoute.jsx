import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateOwnerRoute = ({ children }) => {
  let [token, setToken] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
    if (!token) {
      nav("/owner/login");
    }
  }, [nav,token]);

  return children;
};

export default PrivateOwnerRoute;
