import styled from "styled-components";

export default function PostTitle({ nowPost }) {
  return (
    <PostTitleBox>
      {/* 작성자와 로그인한 사람이 같으면 수정 삭제가 뜨도록 만들기 */}
      {/* 작성자 이름이 뜨도록 하기 ( 글 등록시 아이디 저장을 먼저 해야한다) */}
      <div>
        <div className="categoryStyle">{nowPost.category}</div>
        <span>{nowPost.title}</span>
        <div className="categoryStyle">{nowPost.timeStamp}</div>
      </div>
    </PostTitleBox>
  );
}

const PostTitleBox = styled.div`
  width: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 330px;
  }
  span {
    display: flex;
    font-size: xx-large;
  }
  & .categoryStyle {
    display: flex;
    width: fit-content;
    height: fit-content;
  }
`;
