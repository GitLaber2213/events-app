import styled from "styled-components";

export const PointsSpinContainer = styled.div`
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 1px;
        background: #42567a1f;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 100vh;
        background: #42567a1f;
    }

    @media (max-width: 750px) {
        &::after, &::before {
            display: none;
        }
    }
`;