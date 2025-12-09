import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardContainer, CardsContainer, StyledImage } from "./MainPage.styled";

import { fetchCatsList } from "../features/totalSlice/totalSlice";

const CatCard = () => {
  const dispatch = useDispatch();

  const cats = useSelector((state) => state.total.listCats);
  const limitImageCount = useSelector((state) => state.total.limitImageCount);
  const status = useSelector((state) => state.total.statusCats);
  const selectedBreed = useSelector((state) => state.total.selectedBreed);

  useEffect(() => {
    dispatch(fetchCatsList({ breedId: selectedBreed, limit: limitImageCount }));
  }, [selectedBreed]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <CardsContainer>
      {cats.map((item) => (
        <CardContainer key={item.id + item.index}>
          <StyledImage src={`${item.url}`} alt="cat"></StyledImage>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default CatCard;
