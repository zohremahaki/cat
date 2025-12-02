import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBarContainer, UlStyle } from "./MainPage.styled";

import {
  fetchCatsBreeds,
  setCatsBreeds,
} from "../features/totalSlice/totalSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const breed = useSelector((state) => state.total.listBreeds);

  useEffect(() => {
    dispatch(fetchCatsBreeds());
  }, []);

  return (
    <SideBarContainer>
      <UlStyle>
        {breed.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              dispatch(setCatsBreeds(item.id));
            }}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </UlStyle>
    </SideBarContainer>
  );
};

export default SideBar;
