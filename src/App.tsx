import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import SelectCountry from "./routes/Country";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Routes>
        <Route path="/country" element={<SelectCountry />} />
      </Routes>
    </Theme>
  );
}

export default App;
