export type SubjectItem = {
    id: number;
    label: string;
    dateRange: { start: number; end: number };
    events: Array<{ year: number; description: string }>;
};

export type SubjectState = {
    items: SubjectItem[];
    activeIndex: number;
    isAnimating: boolean;
};

