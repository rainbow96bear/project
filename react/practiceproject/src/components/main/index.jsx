import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import BlogHeader from "./BlogHeader";
import BlogSideBar from "./BlogSideBar";
import MainPostScreenContainer from "./mainPostScreen/MainPostScreenContainer";

export default function MainIndex({ post }) {
  return (
    <MainBox>
      <BlogHeader></BlogHeader>
      <div className="mainBox">
        <BlogSideBar className="blogSideBar"></BlogSideBar>
        <Routes>
          <Route
            path="/"
            element={
              <MainPostScreenContainer></MainPostScreenContainer>
            }></Route>
          {post.map((item, index) => (
            <Route
              key={`mainPost-${index}`}
              path={item.title}
              element={<div>item.title</div>}></Route>
          ))}
        </Routes>
      </div>
    </MainBox>
  );
}
const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & .mainBox {
    width: 70%;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
`;
