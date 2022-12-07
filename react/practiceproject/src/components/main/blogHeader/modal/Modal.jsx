import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { action as modalOnOff } from "../../../modules/modalOnOff";
import { action as actionloginUser } from "../../../modules/loginUser";
import { useEffect } from "react";

export default function Modal() {
  const loginUser = useSelector((state) => state.loginUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function moveToManage() {
    dispatch(modalOnOff.modalToggle());
    if (loginUser.userId) {
      navigate("/manage");
    } else {
      navigate("/login");
    }
  }
  function moveEditPost() {
    dispatch(modalOnOff.modalToggle());
    if (loginUser.userId) {
      navigate("/manage/newpost");
    } else {
      navigate("/login");
    }
  }
  function moveLogin() {
    dispatch(modalOnOff.modalToggle());
    navigate("/login");
  }
  function logout() {
    dispatch(actionloginUser.logout());
    navigate("/");
  }
  useEffect(() => {}, [loginUser]);
  return (
    <ModalBox>
      <div onClick={moveToManage}>관리</div>
      <div onClick={moveEditPost}>글 쓰기</div>
      {loginUser.userId ? (
        <div onClick={logout}>로그아웃</div>
      ) : (
        <div onClick={moveLogin}>로그인</div>
      )}
    </ModalBox>
  );
}

const ModalBox = styled.div`
  width: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    width: 100%;
    padding: 5px 0px;
    border: 1px solid lightgray;
    justify-content: center;
  }
`;
