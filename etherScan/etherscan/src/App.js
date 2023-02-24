import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";

import MainContainer from "./main/MainContainer";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import SingleItemInfoContainer from "./singleItemInfo/SingleItemInfoContainer";
import ViewAllContainer from "./ViewAll/ViewAllContainer";
import NotFindContainer from "./404/NotFindContainer";
function App() {
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(where);
  };
  return (
    <AppBox>
      <AreaVer>
        <HeaderBox>
          <HeaderContainer></HeaderContainer>
        </HeaderBox>
      </AreaVer>
      <AreaCol>
        <TopBannerBox>
          <img
            onClick={() => {
              moveTo("/");
            }}
            src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg?v=0.0.5"></img>
          <DropDownFunction>
            home Blockchain Tokens NFTs Resources Developers More
          </DropDownFunction>
        </TopBannerBox>
      </AreaCol>
      <AreaCol>
        <Routes>
          <Route
            path="/"
            element={<MainContainer moveTo={moveTo}></MainContainer>}></Route>
          <Route
            path="/:type"
            element={<ViewAllContainer></ViewAllContainer>}></Route>
          <Route
            path="/Block/:value"
            element={
              <SingleItemInfoContainer
                type={"block"}
                moveTo={moveTo}></SingleItemInfoContainer>
            }></Route>
          <Route
            path="/tx/:value"
            element={
              <SingleItemInfoContainer
                type={"tx"}
                moveTo={moveTo}></SingleItemInfoContainer>
            }></Route>
          <Route
            path="/address/:value"
            element={
              <SingleItemInfoContainer
                type={"address"}
                moveTo={moveTo}></SingleItemInfoContainer>
            }></Route>
          <Route
            path="/404"
            element={<NotFindContainer></NotFindContainer>}></Route>
        </Routes>
      </AreaCol>
      <AreaVer>
        <FooterBox>
          <FooterContainer moveTo={moveTo}></FooterContainer>
        </FooterBox>
      </AreaVer>
    </AppBox>
  );
}

export default App;
const AppBox = styled.div`
  background-color: #f9f9f9;
`;
const AreaVer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;

const AreaCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const HeaderBox = styled.div`
  width: 100%;
  max-width: 1400px;
`;

const TopBannerBox = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    padding: 10px;
    width: 150px;
    cursor: pointer;
  }
`;
const DropDownFunction = styled.div`
  padding: 10px;
`;

const FooterBox = styled.div`
  width: 100%;
  max-width: 1400px;
`;
