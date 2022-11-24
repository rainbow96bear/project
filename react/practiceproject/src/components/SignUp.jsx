import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp({ userArr, setUserArr, loginUserID }) {
  const [idAllow, setIdAllow] = useState(false);
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const signup = (e) => {
    e.preventDefault();
    // 각 input이 채워졌는지 확인하기
    // 안 채워진 input은 빨간 태두리 설정
    if (idAllow) {
      setUserArr([...userArr, userInfo]);
      navigate(-1);
    } else {
      alert("아이디 중복을 확인해주세요");
    }
  };
  const checkId = (e) => {
    e.preventDefault();
    let test = userArr.find((item) => {
      if (item.id === userInfo.id) {
        return item.id;
      }
    });
    if (test === undefined) {
      if (idAllow) {
        alert("이미 검사하셨습니다. 사용 가능합니다.");
      } else {
        setIdAllow(true);
        alert("사용가능한 아이디 입니다.");
      }
    } else {
      alert("이미 존재하는 아이디 입니다.");
    }
  };
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
    email: "",
    name: "",
    birth: "",
  });
  useEffect(() => {
    setIdAllow(false);
  }, [userInfo.id]);
  useEffect(() => {
    if (loginUserID) {
      navigate(-1);
    }
  }, [loginUserID]);
  return (
    <div>
      <form action="" style={styles.frame}>
        <div style={styles.inputBox}>
          <span style={styles.spanStyle}>아이디</span>
          <div style={styles.row}>
            <input
              type={"text"}
              style={styles.idInputBox}
              placeholder="아이디"
              onInput={(e) => {
                setUserInfo({ ...userInfo, id: e.target.value });
              }}
              value={userInfo.id}></input>
            <button onClick={checkId}>중복 확인</button>
          </div>
        </div>
        <div style={styles.inputBox}>
          <span style={styles.spanStyle}>비밀번호</span>
          <input
            type={"password"}
            style={styles.inputStyle}
            placeholder="비밀번호"
            onInput={(e) => {
              setUserInfo({ ...userInfo, pw: e.target.value });
            }}
            value={userInfo.pw}></input>
        </div>
        <div style={styles.inputBox}>
          <span style={styles.spanStyle}>비밀번호 확인</span>
          <input
            type={"password"}
            style={styles.inputStyle}
            placeholder="비밀번호 확인"
            onInput={(e) => {
              // 같으면 초록색 태두리
              // 다르면 빨간색 태두리
              if (userInfo.pw === e.target.value) {
                console.log("같아요~");
              } else {
                console.log("달라요~");
              }
            }}></input>
        </div>
        <div style={styles.inputBox}>
          <span style={styles.spanStyle}>이름</span>
          <input
            type={"text"}
            style={styles.inputStyle}
            placeholder="이름"
            onInput={(e) => {
              setUserInfo({ ...userInfo, name: e.target.value });
            }}
            value={userInfo.name}></input>
        </div>
        <div style={styles.inputBox}>
          <span style={styles.spanStyle}>이메일</span>
          <input
            type="email"
            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
            style={styles.inputStyle}
            placeholder="이메일"
            onInput={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
            value={userInfo.email}></input>
        </div>
        <div style={styles.inputBox}>
          <span style={styles.spanStyle}>생일</span>
          <input
            type={"date"}
            style={styles.inputStyle}
            placeholder="생일"
            onInput={(e) => {
              setUserInfo({ ...userInfo, birth: e.target.value });
            }}
            value={userInfo.birth}></input>
        </div>
        <div style={styles.inputStyle}>
          <button onClick={handleGoBack}>가입취소</button>
          <button onClick={signup}>가입완료</button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  frame: {
    backgroundColor: "gray",
    width: "100vw",
    height: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "55vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    border: "1px solid black",
    margin: "3px",
    padding: "3px",
  },
  row: { display: "flex", justifyContent: "space-between", width: "100%" },
  idInputBox: {
    width: "30vw",
    height: "30px",
    margin: "5px",
    border: "none",
  },
  btn: { width: "fit-content", height: "10px" },
  spanStyle: {
    width: "54vw",
    display: "flex",
    alignItems: "left",
    fontSize: 12,
  },
  inputStyle: {
    width: "54vw",
    height: "30px",
    margin: "5px",
    border: "none",
  },
};
