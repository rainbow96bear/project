import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainPostScreen({ post }) {
  console.log(post);
  return (
    <MainPostScreenBox>
      {post.map((item, index) => (
        <Link key={`mainPost-${index}`} className="postBox" to={item.title}>
          <span>{item.title}</span>
          <div className="contentStyle">{item.content}</div>
        </Link>
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
