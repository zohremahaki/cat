import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../features/catsImages/catsImagesSlice";
import { CardContainer, CardsContainer, StyledImage } from "./MainPage.styled";
const CatCard = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cats.list);
  const status = useSelector((state) => state.cats.status);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);
  if (status === "loading") return <p>Loading...</p>;
  return (
    <CardsContainer>
      {cats.map((item) => (
        <CardContainer>
          <StyledImage
            src={`${item.url}`}
            alt="cat"
            key={item.id}
          ></StyledImage>
        </CardContainer>
      ))}
    </CardsContainer>
  );
};

export default CatCard;
