import { useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { GenericWrapper } from "../assets/styles/Wrapper";
import Header from "../components/Header";
import Input from "../assets/styles/Input";
import Button from "../assets/styles/Button";
import { signUp } from "../services/api";

export default function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("shortly"));

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        signUp(data)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                alert("Revise os dados");
                console.log(error);
            });
    }

    if (auth) {
        return (
            <Navigate to="/" />
        );
    }

    return(
        <Wrapper>
            <Header sign={true} />
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={data.name}
                    updateData={updateData}
                />
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
                <Input
                    type="password"
                    placeholder="Confirmar senha"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    updateData={updateData}
                />

                <Button>Criar Conta</Button>
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