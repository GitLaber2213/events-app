import styled from "styled-components";

export const DefaultButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #fff;

    &:disabled {
        opacity: .5;
        cursor: default;
    }
`;

export const CircleButton = styled(DefaultButton)`
    height: clamp(40px, 6vw, 50px);
    width: clamp(40px, 6vw, 50px);
    border-radius: 100%;
    border: 1px solid rgb(173, 172, 172);
    
    display: flex;
    align-items: center;
    justify-content: center;
`;