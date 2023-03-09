import react, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ReptilianPaperPage from "./components/pages/ReptilianPaperPage";
import TermsOfService from "./components/pages/TermsOfService";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import "./App.css";
import "./normalize.css";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/paper" element={<ReptilianPaperPage />} />
        <Route path="/service" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
