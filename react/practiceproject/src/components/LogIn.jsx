import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn({ userArr, setUserArr, setLoginUserID }) {
  const [userID, setuserID] = useState("");
  const [userPW, setuserPW] = useState("");
  useEffect(() => {}, [userArr]);
  function login() {
    const existID = userArr.find((item) => {
      return item.id === userID;
    });
    if (existID) {
      if (existID.pw === userPW) {
        setLoginUserID(existID.id);
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("아이디가 틀렸습니다.");
    }
  }
  return (
    <div>
      <input
        type={"text"}
        onInput={(e) => {
          setuserID(e.target.value);
        }}
        value={userID}></input>
      <input
        type={"password"}
        onInput={(e) => {
          setuserPW(e.target.value);
        }}
        value={userPW}></input>
      <button style={styles.btn} onClick={login}>
        로그인
      </button>

      <Link to="/signup">
        <button style={styles.btn}>회원가입</button>{" "}
      </Link>
    </div>
  );
}
const styles = {
  btn: {
    width: "fit-content",
    height: "fit-content",
  },
};
