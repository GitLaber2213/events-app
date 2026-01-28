import styled from "styled-components";

export const AppLayoutContainer = styled.div`
    position: relative;
    height: 100vh;
    max-width: 1280px;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    margin: 0 auto;
    text-align: center;
    
    border-left: .5px solid #42567a1f;
    border-right: .5px solid #42567a1f;
    
`;

export const InfoViewerToBottomPageContainer = styled.div`
    margin-top: auto;
    margin-bottom: clamp(20px, 5vh, 40px);
    
    @media (max-width: 750px) {
        margin-bottom: 70px;
    }
`;