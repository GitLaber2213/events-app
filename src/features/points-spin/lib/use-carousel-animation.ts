import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import { useAppDispatch } from "@/shared";
import { setIsAnimating } from "@/entity";
import {
    TARGET_ANGLE,
    ROTATION_DURATION,
    LABEL_FADE_IN_DURATION,
    LABEL_FADE_OUT_DURATION,
    LABEL_FADE_IN_DELAY,
} from "./constants";
import { getPointAngle, normalizeDeltaRotation } from "./utils";

interface UseCarouselAnimationProps {
    pointsCount: number;
    wrapperRef: React.RefObject<HTMLDivElement | null>;
    pointRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
    labelRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
}

interface UseCarouselAnimationReturn {
    animateToIndex: (newIndex: number, prevIndex: number) => void;
    killAllTweens: () => void;
    initLabelVisibility: (activeIndex: number) => void;
}

export const useCarouselAnimation = ({
    pointsCount,
    wrapperRef,
    pointRefs,
    labelRefs,
}: UseCarouselAnimationProps): UseCarouselAnimationReturn => {
    const dispatch = useAppDispatch();
    const rotationRef = useRef(0);
    const tweensRef = useRef<gsap.core.Tween[]>([]);

    const killAllTweens = useCallback(() => {
        tweensRef.current.forEach((tween) => tween.kill());
        tweensRef.current = [];
    }, []);

    const animateLabel = useCallback(
        (newIndex: number, oldIndex: number) => {
            if (labelRefs.current[oldIndex]) {
                tweensRef.current.push(
                    gsap.to(labelRefs.current[oldIndex], {
                        opacity: 0,
                        x: -20,
                        duration: LABEL_FADE_OUT_DURATION,
                        ease: "power2.in",
                    })
                );
            }

            if (labelRefs.current[newIndex]) {
                tweensRef.current.push(
                    gsap.fromTo(
                        labelRefs.current[newIndex],
                        { opacity: 0, x: 20 },
                        {
                            opacity: 1,
                            x: 0,
                            duration: LABEL_FADE_IN_DURATION,
                            delay: LABEL_FADE_IN_DELAY,
                            ease: "power2.out",
                        }
                    )
                );
            }
        },
        [labelRefs]
    );

    const animateToIndex = useCallback(
        (newIndex: number, prevIndex: number) => {
            const currentAngle = getPointAngle(newIndex, pointsCount);
            const targetRotation = TARGET_ANGLE - currentAngle;
            const deltaRotation = normalizeDeltaRotation(targetRotation - rotationRef.current);
            const newRotation = rotationRef.current + deltaRotation;

            killAllTweens();
            dispatch(setIsAnimating(true));

            tweensRef.current.push(
                gsap.to(wrapperRef.current, {
                    rotation: newRotation,
                    duration: ROTATION_DURATION,
                    ease: "power2.inOut",
                    onComplete: () => {
                        dispatch(setIsAnimating(false));
                    },
                })
            );

            pointRefs.current.forEach((ref) => {
                if (ref) {
                    tweensRef.current.push(
                        gsap.to(ref, {
                            rotation: -newRotation,
                            duration: ROTATION_DURATION,
                            ease: "power2.inOut",
                        })
                    );
                }
            });

            animateLabel(newIndex, prevIndex);
            rotationRef.current = newRotation;
        },
        [pointsCount, wrapperRef, pointRefs, dispatch, killAllTweens, animateLabel]
    );

    const initLabelVisibility = useCallback(
        (activeIndex: number) => {
            if (labelRefs.current[activeIndex]) {
                gsap.set(labelRefs.current[activeIndex], { opacity: 1, x: 0 });
            }
        },
        [labelRefs]
    );

    return {
        animateToIndex,
        killAllTweens,
        initLabelVisibility,
    };
};
