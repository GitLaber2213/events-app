import type React from "react";
import { ButtonVariations, type ButtonVariation } from "./button-variation";
import { CircleButton, DefaultButton } from "./styles";

type Props = {
    type_: ButtonVariation;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getType = (type: ButtonVariation) => ({
    [ButtonVariations.DEFAULT_BUTTON]: DefaultButton,
    [ButtonVariations.CIRCLE_BUTTON]: CircleButton
}[type]); 


export const Button = ({children, type_, ...attributes}: Props) => {
    const StyledButton = getType(type_);


    return (
        <StyledButton {...attributes}>
            {children}
        </StyledButton>
    );
};