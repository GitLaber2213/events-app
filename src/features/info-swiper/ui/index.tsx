import { useRef, useEffect, useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
import { Card } from "@/shared";
import { useSwiperNavigation, useSubjectTransition } from "../lib";
import { NavButtons } from "./nav-buttons";
import { InfoSwiperContainer, MobileTitle, SwiperContainer, SwiperContentCardContainer } from "./styles";

export const InfoSwider = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {
        swiperRef,
        navState,
        updateNavState,
        handlePrev,
        handleNext,
        resetToStart,
    } = useSwiperNavigation();
    const { displayedSubject } = useSubjectTransition({
        containerRef,
        onTransitionComplete: resetToStart,
    });

    useEffect(() => {
        if (swiperRef.current && displayedSubject) {
            swiperRef.current.update();
            updateNavState(swiperRef.current);
        }
    }, [displayedSubject, swiperRef, updateNavState]);

    const handleSwiperInit = useCallback(
        (swiper: import("swiper").Swiper) => {
            swiperRef.current = swiper;
            updateNavState(swiper);
        },
        [swiperRef, updateNavState]
    );

    return (
        <InfoSwiperContainer ref={containerRef}>
            <MobileTitle>{displayedSubject?.label}</MobileTitle>

            <NavButtons
                isBeginning={navState.isBeginning}
                isEnd={navState.isEnd}
                onPrev={handlePrev}
                onNext={handleNext}
            />

            <SwiperContainer>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    grabCursor
                    breakpoints={{
                        800: { slidesPerView: 2 },
                        1100: { slidesPerView: 3 },
                    }}
                    onSwiper={handleSwiperInit}
                    onSlideChange={updateNavState}
                >
                    {displayedSubject?.events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <SwiperContentCardContainer>
                                <Card
                                    header={String(event.year)}
                                    description={event.description}
                                />
                            </SwiperContentCardContainer>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperContainer>
        </InfoSwiperContainer>
    );
});
