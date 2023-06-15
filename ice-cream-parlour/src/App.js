import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Customer from "./Pages/Customer";
import Owner from "./Pages/Owner";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const path = useLocation();
  let [routeData, setRouteData] = useState(path.pathname.split("/") || []);

  useEffect(() => {
    setRouteData(routeData);
  }, [routeData]);
  return (
    <div className="App">
      {routeData.includes("owner") ? <Owner /> : routeData.includes("customer")?<Customer />:<Navbar/>}
      <AllRoutes />
    </div>
  );
}

export default App;
