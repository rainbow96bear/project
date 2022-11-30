import styled from "styled-components";

export default function PostTitle({ nowPost }) {
  return (
    <PostTitleBox>
      <div>
        <div className="categoryStyle">{nowPost.category || ""}</div>
        <span>{nowPost.title}</span>
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
