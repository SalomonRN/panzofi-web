import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import LandingPage from "./components/LandingPage.jsx";
import Panel from "./components/Panel.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
