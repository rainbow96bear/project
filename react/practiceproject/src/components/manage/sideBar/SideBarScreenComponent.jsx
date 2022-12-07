import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SideBarComponent() {
  const navigate = useNavigate();
  return (
    <SideBarBox>
      <SideBarList>
        <div
          onClick={() => {
            navigate("/manage/post");
          }}>
          글 관리
        </div>
        <div
          onClick={() => {
            navigate("/manage/category");
          }}>
          카테고리 관리
        </div>
        <div
          onClick={() => {
            navigate("/manage/sidebar");
          }}>
          사이드바 관리
        </div>
        <div
          onClick={() => {
            navigate("/manage/setting");
          }}>
          관리
        </div>
      </SideBarList>
    </SideBarBox>
  );
}

const SideBarBox = styled.div``;
const SideBarList = styled.div`
  width: 214px;
  border: 1px solid lightgray;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100px;
    font-size: 14px;
    padding: 3px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
