import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { subjectItems } from "@/shared";
import type { SubjectState } from "./types";

const initialState: SubjectState = {
    items: subjectItems,
    activeIndex: 0,
    isAnimating: false,
};

const subjectSlice = createSlice({
    name: "subject",
    initialState,
    reducers: {
        setActiveIndex: (state, action: PayloadAction<number>) => {
            state.activeIndex = action.payload;
        },
        setIsAnimating: (state, action: PayloadAction<boolean>) => {
            state.isAnimating = action.payload;
        },
    },
});

export const { setActiveIndex, setIsAnimating } = subjectSlice.actions;
export default subjectSlice.reducer;

