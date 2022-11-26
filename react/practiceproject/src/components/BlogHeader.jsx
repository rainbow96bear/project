import styled from "styled-components";

export default function BlogHeader() {
  return (
    <BlogHeadBox>
      <TopBanner>
        <div className="blogTitle">무지개곰의 블로그</div>
        <div>
          <input type="text"></input>
          <div>이미지 파비콘</div>
        </div>
      </TopBanner>
    </BlogHeadBox>
  );
}
const BlogHeadBox = styled.div`
  width: 100vw;
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
`;
