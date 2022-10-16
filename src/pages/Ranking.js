import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { GenericWrapper } from "../assets/styles/Wrapper";
import Header from "../components/Header";
import { FaTrophy } from "react-icons/fa";
import { getRankings } from "../services/api";
import Rank from "../components/Rank";

export default function Ranking() {
    const [ranks, setRanks] = useState([]);
    const auth = JSON.parse(localStorage.getItem("shortly"));

    useEffect(() => {
        getRankings()
            .then((answer) => {
                setRanks(answer.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <Wrapper>
            <Header auth={auth ? true : false} rank={true} />
            <h2>
                <FaTrophy />
                <p>Rankings</p>
            </h2>
            <ul>
                {ranks.map((rank, index) => (
                    <Rank key={rank.id} index={index + 1} {...rank} />
                ))}
            </ul>
            {auth ? <></> : <p>Crie sua conta para usar nosso serviço!</p>}
        </Wrapper>
    );
}

const Wrapper = styled(GenericWrapper)`
    & > h2 {
        width: 100%;
        margin-bottom: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > h2 svg {
        color: #FFD233;
        font-size: 50px;
        margin-right: 14px;
    }

    & > h2 > p, & > p {
        font-size: 37px;
        font-weight: 700;
        color: #000000;
    }

    & > ul {
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 20px 20px 0 0;
        border: 1px solid #DDEBD5;
        padding: 30px 40px;
        margin-bottom: 20px;
    }

    & > ul li {
        color: #000000;
        line-height: 35px;
        font-size: 22px;
        font-weight: 500;
    }

    & > p {
        text-align: center;
        width: 100%;
    }
`;