import { lazy, Suspense } from "react";
import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Spinner from "./components/Spinner/Spinner";

const Auth = lazy(() => import("./routes/Auth/Auth"));
const Country = lazy(() => import("./routes/Country/Country"));
const League = lazy(() => import("./routes/League/League"));
const Team = lazy(() => import("./routes/Team/Team"));
const Details = lazy(() => import("./routes/Details/Details"));
const ErrorBoundary = lazy(
  () => import("./components/ErrorBoundary/ErrorBoundary")
);
const ErrorPage = lazy(() => import("./routes/ErrorPage/ErrorPage"));
const NotFound = lazy(() => import("./routes/NotFound/NotFound"));

function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Theme>
        <GlobalStyles />
        <AuthContextProvider>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
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
              <Route
                path=":countryName/:leagueId/:seasonId/:teamId"
                element={
                  <ProtectedRoute>
                    <Details />
                  </ProtectedRoute>
                }
              />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthContextProvider>
      </Theme>
    </ErrorBoundary>
  );
}

export default App;
