import { useRef, useState, useCallback } from "react";
import type { Swiper as SwiperType } from "swiper";

interface SwiperNavigationState {
    isBeginning: boolean;
    isEnd: boolean;
}

interface UseSwiperNavigationReturn {
    swiperRef: React.MutableRefObject<SwiperType | null>;
    navState: SwiperNavigationState;
    updateNavState: (swiper: SwiperType) => void;
    handlePrev: () => void;
    handleNext: () => void;
    resetToStart: () => void;
}

export const useSwiperNavigation = (): UseSwiperNavigationReturn => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [navState, setNavState] = useState<SwiperNavigationState>({
        isBeginning: true,
        isEnd: false,
    });

    const updateNavState = useCallback((swiper: SwiperType) => {
        setNavState({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
        });
    }, []);

    const handlePrev = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    const resetToStart = useCallback(() => {
        swiperRef.current?.slideTo(0, 0);
        if (swiperRef.current) {
            updateNavState(swiperRef.current);
        }
    }, [updateNavState]);

    return {
        swiperRef,
        navState,
        updateNavState,
        handlePrev,
        handleNext,
        resetToStart,
    };
};
