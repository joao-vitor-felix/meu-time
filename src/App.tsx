import { lazy, Suspense } from "react";
import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Spinner from "./components/Spinner/Spinner";

const Country = lazy(() => import("./routes/Country/Country"));
const League = lazy(() => import("./routes/League/League"));
const Team = lazy(() => import("./routes/Team/Team"));
const Auth = lazy(() => import("./routes/Auth/Auth"));

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <AuthContextProvider>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Country />
                </ProtectedRoute>
              }
            />
            <Route
              path=":countryName"
              element={
                <ProtectedRoute>
                  <League />
                </ProtectedRoute>
              }
            />
            <Route
              path=":countryName/:leagueId/:seasonId"
              element={
                <ProtectedRoute>
                  <Team />
                </ProtectedRoute>
              }
            />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </Theme>
  );
}

export default App;
