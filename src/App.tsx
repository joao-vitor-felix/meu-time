import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Country from "./routes/Country/Country";
import League from "./routes/League/League";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path=":countryName" element={<League />} />
      </Routes>
    </Theme>
  );
}

export default App;
