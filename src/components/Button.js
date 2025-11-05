import { useDispatch } from "react-redux";
import { increaseLimitImageCount } from "../features/totalSlice/totalSlice";
import { ButtonContainer } from "./MainPage.styled";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer
      onClick={() => {
        dispatch(increaseLimitImageCount(10));
      }}
    >
      LOAD MORE...
    </ButtonContainer>
  );
};

export default Button;
