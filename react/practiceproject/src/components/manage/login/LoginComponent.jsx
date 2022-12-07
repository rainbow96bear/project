import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginComponent({
  usersDB,
  loginInfo,
  setLoginInfo,
  login,
  logIn,
}) {
  const navigate = useNavigate();
  const moveToRegist = () => {
    navigate("/regist");
  };
  return (
    <LoginBox>
      <span>무지개곰</span>
      <div className="inputBox">
        <input
          type="text"
          placeholder="ID"
          value={loginInfo.id || ""}
          onInput={(e) => {
            setLoginInfo({ ...loginInfo, id: e.target.value });
          }}></input>
        <input
          type="password"
          placeholder="PASS WORD"
          value={loginInfo.pw || ""}
          onInput={(e) => {
            setLoginInfo({ ...loginInfo, pw: e.target.value });
          }}></input>
      </div>
      <LoginBtn onClick={logIn}>로그인</LoginBtn>
      <RegistBtn onClick={moveToRegist}>회원 가입</RegistBtn>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 30px;
  }
  & .inputBox {
    display: flex;
    flex-direction: column;
    margin: 30px;
  }
  input {
    width: 500px;
    height: 50px;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 3px;
  }
  button {
    border: none;
    width: 512px;
    height: 50px;
    font-weight: bold;
    border-radius: 3px;
    font-size: 15px;s
  }
`;
const LoginBtn = styled.button`
  background-color: #ffe500;
`;
const RegistBtn = styled.button`
  background-color: lightgray;
  margin-top: 15px;
`;
