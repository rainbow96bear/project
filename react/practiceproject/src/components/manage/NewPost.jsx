import styled from "styled-components";
import { useContext } from "react";
import { PostInfo } from "../../App";

export default function NewPost() {
  const { postArr, setPostArr, categoryArr } = useContext(PostInfo);
  return (
    <NewPostBox>
      <TopBanner></TopBanner>
      <MainPostingBox>
        <div>
          <form action="">
            <div className="formStyle">
              <select placeholder="카테고리">
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
                placeholder="제목을 입력하세요"
              />
              <textarea
                className="context"
                placeholder="내용을 입력하세요"></textarea>
            </div>
          </form>
        </div>
      </MainPostingBox>
      <Footer>
        <div>
          <div className="tempSave">
            임시저장 | <span>0</span>
          </div>
          <div className="uploadBtn">완료</div>
        </div>
      </Footer>
    </NewPostBox>
  );
}

const NewPostBox = styled.div`
  display: flex;
  justify-content: center;
`;
const TopBanner = styled.div``;
const MainPostingBox = styled.div`
  width: 80%;

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
