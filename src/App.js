import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { userContext } from "./contexts/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Ranking from "./pages/Ranking";
import SignUp from "./pages/SignUp";

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <userContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Ranking />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
            </BrowserRouter>
        </userContext.Provider>
    );
}