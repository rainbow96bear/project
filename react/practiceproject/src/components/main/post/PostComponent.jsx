import styled from "styled-components";

export default function PostComponent({ nowPost }) {
  return <PostBox>{nowPost.content}</PostBox>;
}

const PostBox = styled.div`
  width: 80%;
`;
