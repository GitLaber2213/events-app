import styled from "styled-components";
import { Button } from "@/shared";

export const SwiperButtonSwipe = styled(Button)`
    width: clamp(32px, 5vw, 40px);
    height: clamp(32px, 5vw, 40px);
    border: none;
    box-shadow: 0px 0px 25px 0px rgba(56, 120, 238, 0.36);
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SwiperContainer = styled.div`
    margin: 0 clamp(20px, 8vw, 80px);
`;

export const SwiperContentCardContainer = styled.div`
    text-align: left;
`;

export const InfoSwiperContainer = styled.div`
    position: relative;
    
    .swiper-pagination {
        display: none;
        position: relative;
        margin-top: 16px;
        
        @media (max-width: 750px) {
            display: flex;
            justify-content: center;
            gap: 8px;
        }
    }
    
    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: #42567A;
        opacity: 0.4;
        border-radius: 50%;
    }
    
    .swiper-pagination-bullet-active {
        opacity: 1;
    }
`;

export const MobileTitle = styled.div`
    display: none;
    font-size: 20px;
    font-weight: 700;
    color: #42567A;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #42567A;
    text-align: left;
    margin-left: clamp(20px, 8vw, 80px);
    margin-right: clamp(20px, 8vw, 80px);
    
    @media (max-width: 750px) {
        display: block;
    }
`;

export const NavButton = styled.div<{ $position: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    ${({ $position }) => $position === 'left' ? 'left: 16px;' : 'right: 16px;'}
    
    @media (max-width: 768px) {
        display: none;
    }
`;