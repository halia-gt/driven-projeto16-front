import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GenericWrapper } from "../assets/styles/Wrapper";
import Header from "../components/Header";
import Input from "../assets/styles/Input";
import Button from "../assets/styles/Button";
import { signIn } from "../services/api";

export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        signIn(data)
            .then((answer) => {
                const infoJSON = JSON.stringify({ token: answer.data.token });
                localStorage.setItem("shortly", infoJSON);
                navigate("/home");
            })
            .catch((error) => {
                alert("Revise os dados");
                console.log(error);
            });
    }

    return(
        <Wrapper>
            <Header />
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={data.email}
                    updateData={updateData}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={data.password}
                    updateData={updateData}
                />

                <Button>Entrar</Button>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled(GenericWrapper)`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
    }

    form input {
        margin-bottom: 25px;
    }

    form button {
        margin-top: 60px;
    }
`;