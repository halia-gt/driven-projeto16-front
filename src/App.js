import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Ranking from "./pages/Ranking";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<Ranking />} />
            </Routes>
    </BrowserRouter>
  );
}