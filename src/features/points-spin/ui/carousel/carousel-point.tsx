import { forwardRef, memo } from "react";
import { Point, PointIndex, PointLabel } from "./styles";

interface CarouselPointProps {
    index: number;
    pointNumber: number;
    label?: string;
    isActive: boolean;
    labelRef: (el: HTMLSpanElement | null) => void;
    onClick: () => void;
}

export const CarouselPoint = memo(
    forwardRef<HTMLButtonElement, CarouselPointProps>(
        ({ pointNumber, label, isActive, labelRef, onClick }, ref) => (
            <Point
                ref={ref}
                $isActive={isActive}
                data-active={isActive}
                onClick={onClick}
            >
                <PointIndex>{pointNumber}</PointIndex>
                {label && (
                    <PointLabel ref={labelRef}>
                        {label}
                    </PointLabel>
                )}
            </Point>
        )
    )
);
