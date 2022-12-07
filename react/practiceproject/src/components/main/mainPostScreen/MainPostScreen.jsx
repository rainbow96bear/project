import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MainPostScreen({ post, selectPost }) {
  const navigate = useNavigate();
  function moveToPost(item, index) {
    navigate(`/${item.title}`);
    selectPost(post[index]);
  }

  return (
    <MainPostScreenBox>
      {post.map((item, index) => (
        <div
          onClick={() => {
            moveToPost(item, index);
          }}
          key={`mainPost-${index}`}
          className="postBox">
          <span>{item.title}</span>
          <div className="contentStyle">{item.content}</div>
        </div>
      ))}
    </MainPostScreenBox>
  );
}

const MainPostScreenBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  & .postBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  span {
    display: flex;
    justify-content: flex-start;
    font-size: x-large;
    font-weight: bolder;
  }
  & .contentStyle {
    display: flex;
    justify-content: flex-start;
    color: gray;
  }
`;
