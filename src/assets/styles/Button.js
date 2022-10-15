import styled from "styled-components";

export default function Button ({ children, handleClick = null }) {
    return (
        <ButtonWrapper onClick={handleClick}>
            { children }
        </ButtonWrapper>    
    );
}

const ButtonWrapper = styled.button`
    background: #5D9040;
    border: none;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
    color: #FFFFFF;
    width: 182px;
    height: 60px;
    font-size: 14px;
    font-weight: 700;

    &:active {
        font-size: calc(14px / 0.97);
        transform: scale(0.97);
    }
`;