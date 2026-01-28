import { Button, ButtonVariations, BlackLeftArrowIcon, useAppSelector, useAppDispatch } from "@/shared";
import { SwitcherContainer, SwitcherCounterContainer, SwitcherOptionalMenu, MobileButton, DesktopButtonWrapper } from "./styles";
import { selectActiveIndex, selectItems, selectIsAnimating, setActiveIndex } from "@/entity";

export const SubjectSwitcher = () => {
    const dispatch = useAppDispatch();
    const activeIndex = useAppSelector(selectActiveIndex);
    const items = useAppSelector(selectItems);
    const isAnimating = useAppSelector(selectIsAnimating);

    const total = items.length;
    const isFirst = activeIndex === 0;
    const isLast = activeIndex === total - 1;

    const handlePrev = () => {
        if (!isFirst && !isAnimating) {
            dispatch(setActiveIndex(activeIndex - 1));
        }
    };

    const handleNext = () => {
        if (!isLast && !isAnimating) {
            dispatch(setActiveIndex(activeIndex + 1));
        }
    };

    return (
        <SwitcherContainer>
            <SwitcherCounterContainer>
                {String(activeIndex + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </SwitcherCounterContainer>

            <SwitcherOptionalMenu>
                <DesktopButtonWrapper>
                    <Button
                        type_={ButtonVariations.CIRCLE_BUTTON}
                        disabled={isFirst || isAnimating}
                        onClick={handlePrev}
                    >
                        <BlackLeftArrowIcon width={6.25} height={12.5} />
                    </Button>
                </DesktopButtonWrapper>
                <DesktopButtonWrapper>
                    <Button
                        type_={ButtonVariations.CIRCLE_BUTTON}
                        disabled={isLast || isAnimating}
                        onClick={handleNext}
                    >
                        <BlackLeftArrowIcon width={6.25} height={12.5} style={{ transform: 'rotate(180deg)' }} />
                    </Button>
                </DesktopButtonWrapper>

                <MobileButton
                    type_={ButtonVariations.CIRCLE_BUTTON}
                    disabled={isFirst || isAnimating}
                    onClick={handlePrev}
                >
                    <BlackLeftArrowIcon />
                </MobileButton>
                <MobileButton
                    type_={ButtonVariations.CIRCLE_BUTTON}
                    disabled={isLast || isAnimating}
                    onClick={handleNext}
                >
                    <BlackLeftArrowIcon style={{ transform: 'rotate(180deg)' }} />
                </MobileButton>
            </SwitcherOptionalMenu>
        </SwitcherContainer>
    );
};
