import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { deleteUrl } from "../services/api";

export default function Rank({ id, shortUrl, url, visitCount, reset, setReset }) {
    const redirectUrl = `${process.env.REACT_APP_API_BASE_URL}/urls/open/${shortUrl}`;

    function handleClick() {
        if (window.confirm("Tem certeza que deseja deletar esse link?")) {
            deleteUrl(id)
                .then(() => {
                    setReset(!reset);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <Li>
            <section>
                <span>{url}</span>
                <span onClick={() => {setReset(!reset)}}><a href={redirectUrl} target="_blank" >{shortUrl}</a></span>
                <span>Quantidade de visitantes: {visitCount}</span>
            </section>
            <div onClick={handleClick} >
                <FaTrashAlt />
            </div>
        </Li>
    );
}

const Li = styled.li`
    margin-bottom: 40px;
    color: #FFFFFF;
    display: flex;
    height: 60px;
    border: 1px solid #D8E8D0;
    border-radius: 12px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

    section {
        border-radius: 12px 0 0 12px;
        height: 60px;
        background-color: #80CC74;
        display: flex;
        justify-content: space-between;
        padding: 21px 94px 21px 21px;
        flex-grow: 2;
    }

    div {
        height: 60px;
        border-radius: 0 12px 12px 0;
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div svg {
        color: #EA4F4F;
        font-size: 26px;
    }

    div svg:hover {
        cursor: pointer;
    }

    a {
        color: #FFFFFF;
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
        color: #FFFFFF;
    }
`;