import { useRef, useEffect, useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "@/shared";
import {
    selectPoints,
    selectLabels,
    selectActiveIndex,
    setActiveIndex,
} from "@/entity";
import { useCarouselAnimation, getPointAngle, calculatePosition } from "../../lib";
import { CarouselPoint } from "./carousel-point";
import { CarouselContainer, PointsWrapper } from "./styles";

export const Carousel = memo(() => {
    const dispatch = useAppDispatch();
    const points = useAppSelector(selectPoints);
    const labels = useAppSelector(selectLabels);
    const activeIndex = useAppSelector(selectActiveIndex);

    const prevIndexRef = useRef(activeIndex);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const pointRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const { animateToIndex, killAllTweens, initLabelVisibility } = useCarouselAnimation({
        pointsCount: points.length,
        wrapperRef,
        pointRefs,
        labelRefs,
    });

    const handlePointClick = useCallback(
        (index: number) => {
            dispatch(setActiveIndex(index));
        },
        [dispatch]
    );

    useEffect(() => {
        if (activeIndex !== prevIndexRef.current) {
            animateToIndex(activeIndex, prevIndexRef.current);
            prevIndexRef.current = activeIndex;
        }
    }, [activeIndex, animateToIndex]);

    useEffect(() => {
        pointRefs.current.forEach((ref, index) => {
            if (ref) {
                const angle = getPointAngle(index, points.length);
                const { x, y } = calculatePosition(angle);
                ref.style.left = `${x}%`;
                ref.style.top = `${y}%`;
            }
        });

        initLabelVisibility(activeIndex);
    }, [points.length, activeIndex, initLabelVisibility]);

    useEffect(() => {
        return () => killAllTweens();
    }, [killAllTweens]);

    return (
        <CarouselContainer>
            <PointsWrapper ref={wrapperRef}>
                {points.map((point, index) => (
                    <CarouselPoint
                        key={index}
                        ref={(el) => {
                            pointRefs.current[index] = el;
                        }}
                        index={index}
                        pointNumber={point}
                        label={labels?.[index]}
                        isActive={index === activeIndex}
                        labelRef={(el) => {
                            labelRefs.current[index] = el;
                        }}
                        onClick={() => handlePointClick(index)}
                    />
                ))}
            </PointsWrapper>
        </CarouselContainer>
    );
});
