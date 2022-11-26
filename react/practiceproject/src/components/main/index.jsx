import styled from "styled-components";
import BlogSideBar from "./BlogSideBar";
import MainPostScreen from "./MainPostScreen";

export default function MainIndex() {
  return (
    <MainBox>
      <div>
        <BlogSideBar className="blogSideBar"></BlogSideBar>
        <MainPostScreen></MainPostScreen>
      </div>
    </MainBox>
  );
}
const MainBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  div {
    width: 70%;
  }
`;
