import { MainPageContainer } from "./MainPage.styled";
import SideBar from "./SideBar";
import MainContentArea from "./MainContentArea";

const MainPage = () => {
  return (
    <MainPageContainer>
      <SideBar />
      <MainContentArea/>
    </MainPageContainer>
  );
};

export default MainPage;
