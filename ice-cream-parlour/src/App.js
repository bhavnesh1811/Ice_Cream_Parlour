import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import CustomerNavbar from "./Components/CustomerNavbar";
import OwnerNavbar from "./Components/OwnerNavbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const path = useLocation();
  let [routeData, setRouteData] = useState(path.pathname.split("/") || []);
  // console.log(routeData);

  useEffect(() => {
    setRouteData(path.pathname.split("/"));
  }, [path.pathname]);
  return (
    <div className="App">
      {routeData?.includes("owner") ? (
        <OwnerNavbar />
      ) : routeData.includes("customer") ? (
        <CustomerNavbar />
      ) : (
        ""
      )}
      <AllRoutes />
    </div>
  );
}

export default App;
