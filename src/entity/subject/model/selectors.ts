import { createSelector } from "@reduxjs/toolkit";
import type { SubjectState } from "./types";

type RootState = { subject: SubjectState };

export const selectItems = (state: RootState) => state.subject.items;
export const selectActiveIndex = (state: RootState) => state.subject.activeIndex;
export const selectIsAnimating = (state: RootState) => state.subject.isAnimating;

export const selectActiveSubject = createSelector(
    [selectItems, selectActiveIndex],
    (items, index) => items[index]
);

export const selectPoints = createSelector(
    [selectItems],
    (items) => items.map((item) => item.id)
);

export const selectLabels = createSelector(
    [selectItems],
    (items) => items.map((item) => item.label)
);

export const selectActiveDateRange = createSelector(
    [selectActiveSubject],
    (subject) => subject?.dateRange
);
