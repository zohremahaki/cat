import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatsBreeds } from "../features/catsBreeds/catsBreedsSlice";
import { SideBarContainer, UlStyle } from "./MainPage.styled";
const SideBar = () => {
  const dispatch = useDispatch();
  const breed = useSelector((state) => state.breed.list);
  const status = useSelector((state) => state.breed.status);

  useEffect(() => {
    dispatch(fetchCatsBreeds());
  }, [dispatch]);
  if (status === "loading") return <p>Loading...</p>;

  return (
    <SideBarContainer>
      <UlStyle>
        {breed.map((item) => (
          <li>
            <p key={item.id}>{item.name}</p>
          </li>
        ))}
      </UlStyle>
    </SideBarContainer>
  );
};

export default SideBar;
