import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { userContext } from "../contexts/userContext";
import {ReactComponent as Logo} from "../assets/img/shorts.svg";
import { getUser } from "../services/api";

export default function Header({ auth = false, login = false, sign = false }) {
    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem("shortly");
        navigate("/");
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
    }, []);

    return (
        <Wrapper >
            <section>
                {auth ? <span>Seja bem-vindo(a), {user ? user.name : null}</span> : <span></span>}
                {auth ? (
                        <aside>
                            <p onClick={() => {navigate("/home")}}>Home</p>
                            <p onClick={() => {navigate("/")}}>Ranking</p>
                            <p onClick={handleClick}>Sair</p>
                        </aside>
                    ) : (
                        <aside>
                            <Plogin login={login} onClick={() => {navigate("/login")}}>Entrar</Plogin>
                            <Psign sign={sign} onClick={() => {navigate("/signup")}}>Cadastrar-se</Psign>
                        </aside>
                    )
                }
            </section>
            <div>
                <h1>Shortly</h1>
                <Logo />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    padding: 60px 0;

    section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    section span {
        color: #5D9040;
    }

    section aside {
        display: flex;
    }

    section aside p {
        margin-left: 27px;
        color: #9c9c9c;
    }

    section aside p:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    div h1 {
        margin-right: 8px;
        font-weight: 200;
        color: #000000;
        font-size: 64px;
    }
`;

const Plogin = styled.p`
    color: ${props => props.login ? "#5D9040" : "#9c9c9c"};
`;

const Psign = styled.p`
    color: ${props => props.sign ? "#5D9040" : "#9c9c9c"};
`;