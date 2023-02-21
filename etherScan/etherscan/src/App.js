import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./main/MainContainer";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import styled from "styled-components";
import SingleItemInfoContainer from "./singleItemInfo/SingleItemInfoContainer";
function App() {
  return (
    <div>
      <HeaderArea>
        <HeaderBox>
          <HeaderContainer></HeaderContainer>
        </HeaderBox>
      </HeaderArea>
      <MainArea>
        <Routes>
          <Route path="/" element={<MainContainer></MainContainer>}></Route>
          <Route path="/Blocks" element={<div>Blocks이렇게?</div>}></Route>
          <Route path="/txs" element={<div>txs이렇게?</div>}></Route>
          <Route
            path="/Block/:value"
            element={
              <SingleItemInfoContainer type={"block"}></SingleItemInfoContainer>
            }></Route>
          <Route
            path="/tx/:value"
            element={
              <SingleItemInfoContainer type={"tx"}></SingleItemInfoContainer>
            }></Route>
        </Routes>
      </MainArea>
      <FooterArea>
        <FooterBox>
          <FooterContainer></FooterContainer>
        </FooterBox>
      </FooterArea>
    </div>
  );
}

export default App;

const HeaderArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const HeaderBox = styled.div`
  width: 100%;
  max-width: 1400px;

  background-color: pink;
`;
const MainArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: skyblue;
`;
const MainBox = styled.div`
  width: 100%;
  max-width: 1400px;
`;
const FooterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FooterBox = styled.div`
  width: 100%;
  max-width: 1400px;
`;
