import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: clamp(300px, 50vmin, 530px);
    height: clamp(300px, 50vmin, 530px);

    border: 1px solid #42567a1f;
    border-radius: 50%;

    z-index: 2;
    
    @media (max-width: 750px) {
        display: none;
    }
`;

export const PointsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Point = styled.button<{ $isActive: boolean }>`
    position: absolute;
    width: ${({ $isActive }) => $isActive ? 'clamp(40px, 10vmin, 56px)' : '6px'};
    height: ${({ $isActive }) => $isActive ? 'clamp(40px, 10vmin, 56px)' : '6px'};
    border-radius: 50%;
    border: 1px solid #42567A;
    background: ${({ $isActive }) => $isActive ? '#fff' : '#42567A'};
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, background 0.3s;
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(14px, 3.5vmin, 20px);
    font-weight: 700;
    color: #42567A;

    &:hover {
        width: clamp(40px, 10vmin, 56px);
        height: clamp(40px, 10vmin, 56px);
        background: #fff;
    }
`;

export const PointIndex = styled.span`
    opacity: 0;
    transition: opacity 0.3s;

    ${Point}:hover &,
    ${Point}[data-active="true"] & {
        opacity: 1;
    }
`;

export const PointLabel = styled.span`
    position: absolute;
    left: calc(100% + 20px);
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
    
    font-size: clamp(10px, 4vmin, 20px);
    font-weight: 700;
    color: #42567A;
    
    opacity: 0;
    pointer-events: none;
`;