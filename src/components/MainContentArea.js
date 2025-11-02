import Button from "./Button";
import CatCard from "./CatCard";
import { MainContentAreaContainer } from "./MainPage.styled";

const MainContentArea = () => {
  return (
    <MainContentAreaContainer>
      <CatCard/>
      <Button />
    </MainContentAreaContainer>
  );
};

export default MainContentArea;
