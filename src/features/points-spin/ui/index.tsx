import { Carousel } from "./carousel";
import { Dates } from "./dates";
import { PointsSpinContainer } from "./styles";

export const PointsSpin = () => {
    return (
        <PointsSpinContainer>
            <Carousel />
            <Dates />
        </PointsSpinContainer>
    );
};