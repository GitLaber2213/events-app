import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 2vw, 16px);
`;

export const HeaderContainer = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: clamp(16px, 3vw, 25px);
    line-height: 120%;
    text-transform: uppercase;

    color: #3877EE;
`;

export const DescriptionContainer = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: clamp(14px, 2.5vw, 20px);
    line-height: 1.5;
    color: #42567A;
`;