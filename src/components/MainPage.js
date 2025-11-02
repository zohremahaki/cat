import MainContentArea from "./MainContentArea";
import { MainPageContainer } from "./MainPage.styled";
import SideBar from "./SideBar";

const MainPage = () => {
  return (
    <MainPageContainer>
      <SideBar />
      <MainContentArea />
    </MainPageContainer>
  );
};

export default MainPage;

// const [data, setData] = useState("welcome");
// // const [data, setData] = useState([]);
// const firstCatHandler = () => {
//   // setData([{ name: "cat1", age: 2, origin: "persian" }]);
//   setData("first");
// };

// useEffect(() => {

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         // "https://api.thecatapi.com/v1/images/search?limit=10"
//         "https://api.thecatapi.com/v1/images/search"
//       );
//       setData(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();

// }, []);
