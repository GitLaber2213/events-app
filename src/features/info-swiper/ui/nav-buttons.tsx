import { memo } from "react";
import { ButtonVariations, BlueRightArrowIcon } from "@/shared";
import { NavButton, SwiperButtonSwipe } from "./styles";

interface NavButtonsProps {
    isBeginning: boolean;
    isEnd: boolean;
    onPrev: () => void;
    onNext: () => void;
}

export const NavButtons = memo(({ isBeginning, isEnd, onPrev, onNext }: NavButtonsProps) => (
    <>
        {!isBeginning && (
            <NavButton $position="left">
                <SwiperButtonSwipe
                    type_={ButtonVariations.CIRCLE_BUTTON}
                    onClick={onPrev}
                >
                    <BlueRightArrowIcon width={7} height={12} style={{ transform: "rotate(180deg)" }} />
                </SwiperButtonSwipe>
            </NavButton>
        )}
        {!isEnd && (
            <NavButton $position="right">
                <SwiperButtonSwipe
                    type_={ButtonVariations.CIRCLE_BUTTON}
                    onClick={onNext}
                >
                    <BlueRightArrowIcon width={7} height={12} />
                </SwiperButtonSwipe>
            </NavButton>
        )}
    </>
));
