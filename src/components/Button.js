import { useDispatch ,useSelector} from "react-redux";
import { fetchCatsList } from "../features/totalSlice/totalSlice";
import { ButtonContainer, Buttons } from "./MainPage.styled";

const Button = () => {
  const dispatch = useDispatch();
const selectedBreed = useSelector((state) => state.total.selectedBreed);
  return (
    <ButtonContainer>
      <Buttons
        onClick={() => {
              dispatch(fetchCatsList({ breedId: selectedBreed, limit: 10 }));
        }}
      >
        LOAD MORE...
      </Buttons>
    </ButtonContainer>
  );
};

export default Button;