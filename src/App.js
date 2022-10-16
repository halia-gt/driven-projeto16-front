import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Ranking from "./pages/Ranking";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<Ranking />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
    </BrowserRouter>
  );
}