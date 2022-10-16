import styled from "styled-components";

export default function Button ({ children, handleClick = null }) {
    return (
        <Wrapper onClick={handleClick}>
            { children }
        </Wrapper>    
    );
}

const Wrapper = styled.button`
    background: #5D9040;
    border: none;
    border-radius: 12px;
    color: #FFFFFF;
    width: 182px;
    height: 60px;
    font-size: 14px;
    font-weight: 700;

    &:active {
        font-size: calc(14px / 0.97);
        transform: scale(0.97);
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
`;