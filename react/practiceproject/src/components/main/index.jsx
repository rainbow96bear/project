import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import store from "../../store";
import BlogHeader from "./BlogHeader";
import BlogSideBar from "./BlogSideBar";
import MainPostScreenContainer from "./mainPostScreen/MainPostScreenContainer";
import PostContainer from "./post/PostContainer.jsx";
import PostTitleBox from "./postTitle/PostTitle";

function MainIndex({ nowPost, post }) {
  useEffect(() => {
    console.log({ nowPost });
  }, [nowPost]);
  return (
    <MainBox>
      <BlogHeader></BlogHeader>
      <Routes>
        {post.map((item, index) => (
          <Route
            key={`postTitle-${index}`}
            path={item.title}
            element={<PostTitleBox nowPost={nowPost}></PostTitleBox>}></Route>
        ))}
      </Routes>
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
              element={<PostContainer index={index}></PostContainer>}></Route>
          ))}
        </Routes>
      </div>
    </MainBox>
  );
}

const mapStateToProps = (state) => {
  return { nowPost: state.nowPost, post: state.post };
};
export default connect(mapStateToProps)(MainIndex);
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
