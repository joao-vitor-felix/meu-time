import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { PropsWithChildren } from "react";
import Spinner from "../Spinner/Spinner";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated === null) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
