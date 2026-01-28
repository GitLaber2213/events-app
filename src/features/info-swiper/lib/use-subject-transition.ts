import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useAppSelector } from "@/shared";
import { selectActiveSubject, type SubjectItem } from "@/entity";

interface UseSubjectTransitionProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    onTransitionComplete?: () => void;
}

interface UseSubjectTransitionReturn {
    displayedSubject: SubjectItem | undefined;
}

export const useSubjectTransition = ({
    containerRef,
    onTransitionComplete,
}: UseSubjectTransitionProps): UseSubjectTransitionReturn => {
    const activeSubject = useAppSelector(selectActiveSubject);
    const [displayedSubject, setDisplayedSubject] = useState<SubjectItem | undefined>(activeSubject);
    const prevSubjectIdRef = useRef(activeSubject?.id);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!containerRef.current || !activeSubject) return;
        if (activeSubject.id === prevSubjectIdRef.current) return;

        prevSubjectIdRef.current = activeSubject.id;
        tweenRef.current?.kill();

        tweenRef.current = gsap.to(containerRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setDisplayedSubject(activeSubject);
                onTransitionComplete?.();

                tweenRef.current = gsap.to(containerRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            },
        });
    }, [activeSubject, containerRef, onTransitionComplete]);

    useEffect(() => {
        return () => {
            tweenRef.current?.kill();
        };
    }, []);

    return { displayedSubject };
};
