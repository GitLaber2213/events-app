import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { DatesContainer, EndDateContainer, StartDateContainer } from "./styles";
import { useAppSelector } from "@/shared";
import { selectActiveDateRange } from "@/entity";

export const Dates = () => {
    const dateRange = useAppSelector(selectActiveDateRange);
    const startRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween[]>([]);
    const valuesRef = useRef({ start: dateRange?.start ?? 0, end: dateRange?.end ?? 0 });
    
    useEffect(() => {
        if (!dateRange || !startRef.current || !endRef.current) return;
        
        tweenRef.current.forEach(tween => tween.kill());
        tweenRef.current = [];
        
        const startTween = gsap.to(valuesRef.current, {
            start: dateRange.start,
            duration: 1,
            ease: "power2.out",
            onUpdate: () => {
                if (startRef.current) {
                    startRef.current.textContent = String(Math.round(valuesRef.current.start));
                }
            }
        });
        
        const endTween = gsap.to(valuesRef.current, {
            end: dateRange.end,
            duration: 1,
            ease: "power2.out",
            onUpdate: () => {
                if (endRef.current) {
                    endRef.current.textContent = String(Math.round(valuesRef.current.end));
                }
            }
        });
        
        tweenRef.current = [startTween, endTween];
        
        return () => {
            tweenRef.current.forEach(tween => tween.kill());
        };
    }, [dateRange?.start, dateRange?.end]);
    
    return (
        <DatesContainer>
            <StartDateContainer ref={startRef}>
                {dateRange?.start ?? 0}
            </StartDateContainer>
            <EndDateContainer ref={endRef}>
                {dateRange?.end ?? 0}
            </EndDateContainer>
        </DatesContainer>
    );
};