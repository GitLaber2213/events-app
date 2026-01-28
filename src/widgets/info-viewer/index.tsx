import { InfoSwider, SubjectSwitcher } from "@/features";
import { InfoViewerContainer } from "./styles";




export const InfoViewer = () => {
    return (
        <InfoViewerContainer>
            <SubjectSwitcher />
            <InfoSwider />
        </InfoViewerContainer>
    );
};