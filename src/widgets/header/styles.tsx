import styled from "styled-components";

export const HeaderSpacer = styled.div`
    padding-top: 15vh;
`;

export const HeaderContainer = styled.div`
    max-width: clamp(100px, 20vw, 150px);

    font-style: normal;
    font-weight: 700;
    font-size: clamp(20px, 5vw, 56px);
    padding-left: clamp(20px, 8vw, 80px);
    line-height: 120%;
    color: #42567A;
    text-align: left;

    border-left: 5px solid transparent;
    border-image: linear-gradient(180deg, #3877EE, #EF5DA8) 1;
    
    @media (max-width: 750px) {
        border: none;
    }
`;