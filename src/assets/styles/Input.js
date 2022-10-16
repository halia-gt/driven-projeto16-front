import styled from "styled-components";

export default function Input({ type, placeholder, name, updateData, value }) {
    return (
        <Wrapper
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={updateData}
            required
        />
    );
}

const Wrapper = styled.input`
    background-color: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    color: #000000;
    padding: 21px;
    width: 100%;
    max-width: 770px;

    &::placeholder {
        color: #9C9C9C;
    }
`;