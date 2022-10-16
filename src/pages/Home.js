import { Navigate } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
    const auth = JSON.parse(localStorage.getItem("shortly"));

    if (!auth) {
        return (
            <Navigate to="/" />
        );
    }

    return (
        <>
            <Header auth={true} />
        </>
    );
}