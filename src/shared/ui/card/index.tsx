import { CardContainer, DescriptionContainer, HeaderContainer } from "./styles";

type Props = {
    header: string;
    description: string;
};

export const Card = ({ header, description }: Props) => {
    return (
        <CardContainer>
            <HeaderContainer>
                {header}
            </HeaderContainer>

            <DescriptionContainer>
                {description}
            </DescriptionContainer>
        </CardContainer>
    );
};