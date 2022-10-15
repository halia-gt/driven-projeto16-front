import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
    </BrowserRouter>
  );
}