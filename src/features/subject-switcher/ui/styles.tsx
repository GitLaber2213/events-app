import styled from "styled-components";
import { Button } from "@/shared";

export const SwitcherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin-left: clamp(20px, 8vw, 80px);

    gap: clamp(10px, 2vw, 20px);
    
    @media (max-width: 750px) {
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0 20px;
        justify-content: space-between;
        z-index: 100;
    }
`;

export const SwitcherCounterContainer = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: left;

    color: #42567A;
`;

export const SwitcherOptionalMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(10px, 2vw, 20px);
    
    @media (max-width: 750px) {
        gap: 10px;
    }
`;

export const DesktopButtonWrapper = styled.div`
    @media (max-width: 750px) {
        display: none;
    }
`;

export const MobileButton = styled(Button)`
    display: none;
    
    @media (max-width: 750px) {
        display: flex;
        
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
    }
`;