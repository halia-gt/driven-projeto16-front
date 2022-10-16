import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { GenericWrapper } from "../assets/styles/Wrapper";
import Header from "../components/Header";
import Input from "../assets/styles/Input";
import Button from "../assets/styles/Button";
import { postUrl } from "../services/api";
import { userContext } from "../contexts/userContext";

export default function Home() {
    const { user } = useContext(userContext);
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
            .then((answer) => {
                console.log(answer.data);
            })
            .catch((error) => {
                alert("Tem certeza que é uma url válida?");
                console.log(error);
            });
    }

    if (!auth) {
        return (
            <Navigate to="/" />
        );
    }

    console.log(user.shortenedUrls)

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
            <ul>
                {user.shortenedUrls.map(link => (
                    <></>
                ))}
            </ul>
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

    ul li {
        margin-bottom: 40px;
        border-radius: 12px;
    }
`;