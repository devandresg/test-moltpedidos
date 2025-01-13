import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Login";
import RequestsPage from "../../pages/Requests";
import PrivateRoute from "./PrivateRoute";

const RoutesCmp: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/requests"
        element={<PrivateRoute element={<RequestsPage />} />}
      />
    </Routes>
  );
};

export default RoutesCmp;
