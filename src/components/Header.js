import styled from "styled-components";
import {ReactComponent as Logo} from "../assets/img/shorts.svg";

export default function Header({ children, user = false }) {
    return (
        <Wrapper user={user}>
            <section>
                {user ? <span>Seja bem-vindo(a), Pessoa!</span> : <span></span>}
                {user ? (
                        <aside>
                            <p>Home</p>
                            <p>Ranking</p>
                            <p>Sair</p>
                        </aside>
                    ) : (
                        <aside>
                            <p>Entrar</p>
                            <p>Cadastrar-se</p>
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