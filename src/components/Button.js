import { useDispatch } from "react-redux";
import { increaseLimitImageCount } from "../features/totalSlice/totalSlice";
import { ButtonContainer, Buttons } from "./MainPage.styled";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <Buttons
        onClick={() => {
          dispatch(increaseLimitImageCount(10));
        }}
      >
        LOAD MORE...
      </Buttons>
    </ButtonContainer>
  );
};

export default Button;
