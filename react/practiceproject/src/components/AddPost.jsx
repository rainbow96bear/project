import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AddPost({ post, setPost }) {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  function addPost(e) {
    e.preventDefault();
    if (e.target.titleInput.value && e.target.contentInput.value) {
      setPost([
        ...post,
        {
          title: e.target.titleInput.value,
          content: e.target.contentInput.value,
        },
      ]);
      navigate(-1);
    } else {
      alert("모두 입력해주세요.");
    }
  }
  return (
    <AddPostFrame>
      <form onSubmit={addPost}>
        <div className="directionCol">
          <span>제목</span>
          <input
            className="titleInput"
            id="titleInput"
            type="text"
            size="20"
            placeholder="제목을 입력하세요"></input>
        </div>
        <div className="directionCol">
          <span>내용</span>
          <textarea
            id="contentInput"
            className="contentInput"
            type="text"
            rows="30"
            col="20"
            placeholder="내용을 입력하세요"></textarea>
        </div>
        <div className="btnBox">
          <button className="btnStyle" onClick={handleGoBack}>
            뒤로가기
          </button>
          <input className="btnStyle" type="submit" />
        </div>
      </form>
    </AddPostFrame>
  );
}

const AddPostFrame = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    width: 50vw;
    display: flex;
    flex-direction: column;
  }
  & .directionCol {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  span {
    margin: 10px;
    font-size: 20px;
  }
  & .titleInput {
    width: 100%;
    heigth: 30px;
    font-size: 30px;
  }
  & .contentInput {
    width: 100%;
    font-size: 16px;
  }
  & .btnBox {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  & .btnStyle {
    width: 40%;
  }
`;
