import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 4fr;
  height: 100vh;
  background-color: #e0e0e0;
`;
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #f0f0f0;
  padding: 4rem 1.5rem;
`;
export const MainContentAreaContainer = styled.div`
  background-color: #e5e5e5;
  padding: 5rem 0.75rem 0 2rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1rem 0;
`;

export const CardContainer = styled.div`
  width: 20rem;
  height: 20rem;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
`;
export const Buttons = styled.button`
  font-size: 1rem;
  color: #ccccccff;
  text-align: center;
  // line-height: 3rem;
  cursor: pointer;
  font-weight: bold;
  background: #031a08ff;
  border-radius: 8px;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: #053612ff;
  }
  position: fixed;
  padding: 10px 20px;
  left: 17rem;
  bottom: 2rem;
`;
export const ButtonContainer = styled.div`
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;
export const UlStyle = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  li {
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      color: #939694ff;
    }
  }
`;
export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;
