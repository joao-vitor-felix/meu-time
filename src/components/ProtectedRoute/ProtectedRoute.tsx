import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { PropsWithChildren } from "react";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { key } = useAuthContext();

  if (!key) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
