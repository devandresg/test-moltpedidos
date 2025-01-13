import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Login";
import RequestsPage from "../../pages/Requests";
import { AppState } from "../../app/types";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const RoutesCmp: React.FC = () => {
  const apiAuth = useSelector((state: AppState) => state.apiauth);

  return (
    <Routes>
      <Route
        path="/"
        element={
          apiAuth ? (
            <Navigate to="/requests" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/requests"
        element={<PrivateRoute element={<RequestsPage />} />}
      />
    </Routes>
  );
};

export default RoutesCmp;
