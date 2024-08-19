import LandingPage from "./vendorDashboard/pages/LandingPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/vendor" element={<LandingPage />} />
    </Routes>
  );
};
export default App;
