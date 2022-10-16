import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import { userContext } from "../contexts/userContext";
import { getUser } from "../services/api";

export default function Home() {
    const { setUser } = useContext(userContext);
    const auth = JSON.parse(localStorage.getItem("shortly"));

    useEffect(() => {
        getUser()
            .then((answer) => {
                setUser(answer.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

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