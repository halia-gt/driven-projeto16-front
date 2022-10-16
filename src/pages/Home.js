import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { userContext } from "../contexts/userContext";

export default function Home() {
    const [setUser] = useContext(userContext);

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Header />
        </>
    );
}