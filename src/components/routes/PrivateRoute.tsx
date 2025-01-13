import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../../app/types";

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const apiAuth = useSelector((state: AppState) => state.apiauth);

  // Si apiAuth es null, redirige al login
  if (!apiAuth) {
    return <Navigate to="/login" replace />;
  }

  // Si apiAuth existe, renderiza el elemento
  return element;
};

export default PrivateRoute;
