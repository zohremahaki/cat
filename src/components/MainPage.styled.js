import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
  background-color: #e0e0e0;
`;
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2rem;
  background-color: #f0f0f0;
  padding: 4rem 1.5rem;
`;
export const MainContentAreaContainer = styled.div`
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 4rem 6rem;
`;
export const CardContainer = styled.div`
  width: 15rem;
  height: 20rem;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // font-size: 50rem;
  position: relative;
`;
export const ButtonContainer = styled.div`
  width: 12rem;
  height: 5rem;
  font-size: 1rem;
  color: #e7faebff;
  text-align: center;
  line-height: 5rem;
  cursor: pointer;
  font-weight: bold;
  background: #084e18ff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 15rem auto 0 auto;
`;
