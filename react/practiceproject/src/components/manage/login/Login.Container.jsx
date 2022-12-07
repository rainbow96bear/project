import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { action } from "../../modules/loginUser";
import LoginComponent from "./LoginComponent";
import { useNavigate } from "react-router-dom";

export default function LoginContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersDB = useSelector((state) => state.usersDB);
  const [loginInfo, setLoginInfo] = useState({});
  const login = () => {
    dispatch(action.login(loginInfo.id));
  };

  const logIn = () => {
    const userInfo = usersDB.find((item) => {
      if (item.id == loginInfo.id) {
        return item;
      }
    });

    if (userInfo) {
      if (userInfo.pw == loginInfo.pw) {
        login();
        navigate("/");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("아이디가 틀렸습니다.");
    }
  };
  return (
    <LoginComponent
      usersDB={usersDB}
      loginInfo={loginInfo}
      setLoginInfo={setLoginInfo}
      login={login}
      logIn={logIn}></LoginComponent>
  );
}
