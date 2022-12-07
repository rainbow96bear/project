import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost({ post, upload }) {
  const categoryArr = ["자바", "자바스크립트"];
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
    timeStamp: "",
  });
  const navigate = useNavigate();
  function uploadPost() {
    if (newPost.title === "" || newPost.content === "") {
      alert("모두 입력해주세요");
    } else {
      const date = new Date().toLocaleString();
      upload({ ...newPost, timeStamp: date });
      navigate("/");
    }
  }
  return (
    <NewPostBox>
      <Header>
        <div>다양한 기능이 올 자리</div>
      </Header>
      <MainPostingBox>
        <div>
          <div className="formStyle">
            <select
              placeholder="카테고리"
              onChange={(e) => {
                setNewPost({ ...post, category: e.target.value });
              }}>
              {categoryArr.map((item, index) => (
                <option value={item} key={`categoryOption-${index}`}>
                  {item}
                </option>
              ))}
            </select>
            <textarea
              className="title"
              type="text"
              name=""
              id=""
              value={newPost.title || ""}
              onInput={(e) => {
                setNewPost({ ...newPost, title: e.target.value });
              }}
              placeholder="제목을 입력하세요"
            />
            <textarea
              className="context"
              value={newPost.content || ""}
              onInput={(e) => {
                setNewPost({ ...newPost, content: e.target.value });
              }}
              placeholder="내용을 입력하세요"></textarea>
          </div>
        </div>
      </MainPostingBox>
      <Footer>
        <div>
          <div className="tempSave">
            임시저장 | <span>0</span>
          </div>
          <div className="uploadBtn" onClick={uploadPost}>
            완료
          </div>
        </div>
      </Footer>
    </NewPostBox>
  );
}

const NewPostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  div {
    width: 68%;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const MainPostingBox = styled.div`
  width: 68%;

  div {
    width: 100%;
  }
  & .formStyle {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
  select {
    width: 125px;
    height: 35px;
    font-size: 16px;
  }
  & .title {
    margin-top: 20px;
    font-weight: bolder;
    border: none;
    font-size: 30px;
    border-bottom: 1px solid gray;
    resize: none;
    outline: 0 none;
  }
  & .context {
    margin-top: 20px;
    font-size: 15px;
    border: none;
    resize: none;
    min-height: 50vh;
    outline: 0 none;
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  background-color: lightgray;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100vw - 100px);
  }
  & .uploadBtn {
    width: fit-content;
    background-color: black;
    color: white;
    padding: 8px 30px;
    border-radius: 25px;
  }
  & .tempSave {
    width: fit-content;
    border: 1px solid black;
    background-color: lightgray;
    padding: 8px 30px;
    border-radius: 25px;
    span {
      color: red;
    }
  }
`;
