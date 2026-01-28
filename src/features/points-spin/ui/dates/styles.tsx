import styled from "styled-components";

export const DatesContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 750px) {
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    display: flex;
    justify-content: center;
    align-items: center;

    gap: clamp(20px, 10vw, 100px);
    z-index: 1;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`;

export const StartDateContainer = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: clamp(56px, 15vw, 200px);
    line-height: 0.8;
    text-align: center;
    letter-spacing: -0.02em;

    color: #5D5FEF;
`;

export const EndDateContainer = styled(StartDateContainer)`
    color: #EF5DA8;
`;