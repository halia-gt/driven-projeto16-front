import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { GenericWrapper } from "../assets/styles/Wrapper";
import Header from "../components/Header";
import Input from "../assets/styles/Input";
import Button from "../assets/styles/Button";
import { postUrl } from "../services/api";
import { userContext } from "../contexts/userContext";
import Li from "../components/Link";
import { getUser } from "../services/api";

export default function Home() {
    const { user, setUser } = useContext(userContext);
    const [reset, setReset] = useState(false);
    const [data, setData] = useState({
        url: "",
    });
    const auth = JSON.parse(localStorage.getItem("shortly"));

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        postUrl(data)
            .then(() => {
                setReset(!reset);
            })
            .catch((error) => {
                alert("Tem certeza que é uma url válida?");
                console.log(error);
            });
    }

    useEffect(() => {
        if (auth) {
            getUser()
                .then((answer) => {
                    setUser(answer.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [reset]);

    if (!auth) {
        return (
            <Navigate to="/" />
        );
    }

    return (
        <Wrapper>
            <Header auth={true} home={true} />
            <form onSubmit={handleSubmit}>
                <Input
                    type="url"
                    placeholder="Links que cabem no bolso"
                    name="url"
                    value={data.url}
                    updateData={updateData}
                />
                <Button>Encurtar link</Button>
            </form>
            {user ? (
                    <ul>
                        {user.shortenedUrls.map(link => (
                            <Li key={link.id} {...link} reset={reset} setReset={setReset} />
                        ))}
                    </ul>
                ) : (
                    <></>
                )
            }
        </Wrapper>
    );
}

const Wrapper = styled(GenericWrapper)`
    form {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 60px 0;
    }
`;