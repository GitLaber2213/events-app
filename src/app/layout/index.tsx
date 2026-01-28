import { PointsSpin } from "@/features";
import { Header, InfoViewer } from "@/widgets";
import { AppLayoutContainer, InfoViewerToBottomPageContainer } from "./styles";




export const AppLayout = () => {
    return (
        <AppLayoutContainer>
            <Header />

            <PointsSpin />

            <InfoViewerToBottomPageContainer>
                <InfoViewer />
            </InfoViewerToBottomPageContainer>
        </AppLayoutContainer>
    );
};