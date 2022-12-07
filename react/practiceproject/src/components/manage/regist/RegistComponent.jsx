import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginComRegistComponentponent({
  checkOverlap,
  completeRegist,
  setUserDB,
  userDB,
  setPwCheck,
  pwCheck,
}) {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate("/login");
  };
  return (
    <LoginBox>
      <span>회원 가입</span>
      <div className="inputBox">
        <div className="idInputBox">
          <input
            className="idInput"
            type="text"
            placeholder="ID"
            value={userDB.id}
            onInput={(e) => {
              setUserDB({ ...userDB, id: e.target.value });
            }}></input>
          <button className="checkOverlap" onClick={checkOverlap}>
            중복확인
          </button>
        </div>
        <input
          type="password"
          placeholder="PASS WORD"
          value={userDB.pw}
          onInput={(e) => {
            setUserDB({ ...userDB, pw: e.target.value });
          }}></input>
        <input
          type="password"
          placeholder="PASS WORD CHECK"
          value={pwCheck}
          onInput={(e) => {
            setPwCheck(e.target.value);
          }}></input>
        <input
          type="text"
          placeholder="NAME"
          value={userDB.name}
          onInput={(e) => {
            setUserDB({ ...userDB, name: e.target.value });
          }}></input>
        <input
          type="email"
          placeholder="E-MAIL"
          value={userDB.email}
          onInput={(e) => {
            setUserDB({ ...userDB, email: e.target.value });
          }}></input>
      </div>

      <CompleteBtn onClick={completeRegist}>확인</CompleteBtn>
      <CancleBtn onClick={moveToLogin}>취소</CancleBtn>
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
  & .idInputBox {
    width:510px;
    display:flex;
    justify-content:start;
    align-items:center;
    border: 1px solid lightgray;
    border-radius: 3px;
  }
  input {
    width: 500px;
    height: 50px;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 3px;
  }
  & .idInput{
    width:445px;
    height: 50px;
    padding: 5px;
    border: none;
  }
  & .checkOverlap{
    width:50px; 
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
const CompleteBtn = styled.button`
  background-color: #ffe500;
`;
const CancleBtn = styled.button`
  background-color: lightgray;
  margin-top: 15px;
`;
