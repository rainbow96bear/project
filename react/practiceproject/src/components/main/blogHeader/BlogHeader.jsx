import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./modal/Modal";
import { action } from "../../modules/modalOnOff";

export default function BlogHeader() {
  const dispatch = useDispatch();
  const modalOn = useSelector((state) => state.modalOn);
  function modalOnOff() {
    dispatch(action.modalToggle());
  }
  return (
    <BlogHeadBox>
      <TopBanner>
        <div className="blogTitle">무지개곰의 블로그</div>
        <div>
          <input type="text"></input>
          <div className="modalContainer">
            <div
              className="faviconStyle"
              onClick={() => {
                modalOnOff();
                // 누르면 관리로 갈것인지 글쓰기로 갈 것인지 로그인 할 것인지 정하게 하기
              }}></div>
            {modalOn ? (
              <div className="modalPosition">
                <Modal></Modal>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </TopBanner>
    </BlogHeadBox>
  );
}
const BlogHeadBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const TopBanner = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  div {
    display: flex;
  }
  & .blogTitle {
    font-size: 25px;
    font-weight: bolder;
  }
  & .faviconStyle {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 5px 0px 5px 20px;
    background-color: black;
  }
  & .modalContainer {
    position: relative;
  }
  & .modalPosition {
    position: absolute;
    top: 50px;
    left: -15px;
  }
`;
