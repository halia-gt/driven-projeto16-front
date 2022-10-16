import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { userContext } from "../contexts/userContext";
import {ReactComponent as Logo} from "../assets/img/shorts.svg";
import { getUser } from "../services/api";

export default function Header({ auth = false, login = false, sign = false, home = false, rank = false }) {
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
                            <Phome home={home} onClick={() => {navigate("/home")}}>Home</Phome>
                            <Prank rank={rank} onClick={() => {navigate("/")}}>Ranking</Prank>
                            <P onClick={handleClick}>Sair</P>
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

const P = styled.p`
    margin-left: 27px;
    color: #9c9c9c;
`;

const Plogin = styled(P)`
    color: ${props => props.login ? "#5D9040" : "#9c9c9c"};
`;

const Psign = styled(P)`
    color: ${props => props.sign ? "#5D9040" : "#9c9c9c"};
`;

const Phome = styled(P)`
    color: ${props => props.home ? "#5D9040" : "#9c9c9c"};
`;

const Prank = styled(P)`
    color: ${props => props.rank ? "#5D9040" : "#9c9c9c"};
`;