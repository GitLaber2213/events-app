import { TARGET_ANGLE } from "./constants";

export const getPointAngle = (index: number, total: number): number => {
    return TARGET_ANGLE + (360 / total) * index;
};

export const calculatePosition = (angle: number): { x: number; y: number } => {
    const radians = (angle * Math.PI) / 180;
    const x = 50 + 50 * Math.cos(radians);
    const y = 50 + 50 * Math.sin(radians);
    return { x, y };
};

export const normalizeDeltaRotation = (delta: number): number => {
    let normalized = delta;
    while (normalized > 180) normalized -= 360;
    while (normalized < -180) normalized += 360;
    return normalized;
};
