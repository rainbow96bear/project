import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { action } from "../../modules/usersDB";
import RegistComponent from "./RegistComponent";

export default function RegistContainer() {
  const dispatch = useDispatch();
  const usersDB = useSelector((state) => state.usersDB);
  function regist(id, pw, name, email) {
    dispatch(action.regist(id, pw, name, email));
  }
  const [userDB, setUserDB] = useState({ id: "", pw: "", name: "", email: "" });
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState("");
  const [pwEqual, setPwEqual] = useState(false);
  const navigate = useNavigate();

  const completeRegist = () => {
    if (
      userDB.id == "" ||
      userDB.pw == "" ||
      userDB.name == "" ||
      userDB.email == ""
    ) {
      alert("모두 입력해주세요.");
    } else {
      if (idCheck) {
        if (pwEqual) {
          regist(userDB.id, userDB.pw, userDB.name, userDB.email);
          navigate("/login");
        } else {
          alert("비밀번호를 확인해주세요.");
        }
      } else {
        alert("아이디 중복확인을 해주세요.");
      }
    }
  };

  const checkOverlap = () => {
    if (userDB.id != "") {
      if (
        usersDB.find((item) => {
          if (item.id == userDB.id) {
            return true;
          }
        })
      ) {
        alert("이미 사용중인 아이디입니다.");
      } else {
        alert("사용할 수 있는 아이디입니다.");
        setIdCheck(!idCheck);
      }
    } else {
      alert("아이디를 입력하세요");
    }
  };
  useEffect(() => {
    if (idCheck) {
      setIdCheck(!idCheck);
    }
  }, [userDB.id]);
  useEffect(() => {
    if (pwEqual) {
      setPwEqual(!pwEqual);
    } else if (pwCheck != "" && pwCheck == userDB.pw) {
      setPwEqual(!pwEqual);
    }
  }, [pwCheck]);
  return (
    <RegistComponent
      usersDB={usersDB}
      regist={regist}
      checkOverlap={checkOverlap}
      completeRegist={completeRegist}
      setUserDB={setUserDB}
      userDB={userDB}
      setPwCheck={setPwCheck}
      pwCheck={pwCheck}></RegistComponent>
  );
}
